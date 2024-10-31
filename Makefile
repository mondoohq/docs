.PHONY: yarn
yarn:
	yarn install

.PHONY: fmt
fmt: yarn
	yarn prettier --write .

.PHONY: test/fmt
test/fmt: yarn
	yarn prettier --check .

.PHONY: build
build: yarn fmt
	yarn build

.PHONY: serve
serve: yarn fmt build
	yarn run serve

###
### Create a new release note
###

.PHONY: notes
notes:
	@echo "Generating new release note file\n\n"
	@read -p 'What version should I use? ' VERSION; \
	read -p 'What date will this release ship (ex: 2024-11-05)? ' DATE; \
	cp ./releases/_release_template_file.md "./releases/$${DATE}-mondoo-$${VERSION}-is-out.md"; \
	mkdir -p "./static/img/releases/$${DATE}-mondoo-$${VERSION}-is-out"; \
	sed -i '' "s/VERSION/$${VERSION}/g" "./releases/$${DATE}-mondoo-$${VERSION}-is-out.md"

###
### Caddy
###
.PHONY: caddy/run
caddy/run: build
	PORT=8080 ROOT_DIR=./build caddy run

###
### Dockerized for Cloud Run
###
.PHONY: container/build
container/build: build
	docker build --no-cache --platform linux/amd64 -t mondoo/docs .

.PHONY: container/serve
container/serve:
	docker run -d --rm -p 8080:8080 -e PORT=8080 -e ROOT_DIR=/usr/share/caddy mondoo/docs

DOCS_SERVICE_NAME=docs
SERVICE_REGION=us-central1
container/deploy/staging: container/build
	docker tag mondoo/docs gcr.io/mondoo-dev-262313/docs
	docker push gcr.io/mondoo-dev-262313/docs
	gcloud run deploy "${DOCS_SERVICE_NAME}" --project mondoo-dev-262313 --concurrency=1 --memory=512Mi --image gcr.io/mondoo-dev-262313/docs --platform managed --region ${SERVICE_REGION} --set-env-vars=ROOT_DIR=/usr/share/caddy

DOCS_SERVICE_NAME=docs
SERVICE_REGION=us-central1
container/deploy/production: container/build
	docker tag mondoo/docs gcr.io/mondoo-base-infra/docs
	docker push gcr.io/mondoo-base-infra/docs
	gcloud run deploy "${DOCS_SERVICE_NAME}" --project mondoo-base-infra --concurrency=1 --memory=512Mi --image gcr.io/mondoo-base-infra/docs --platform managed --region ${SERVICE_REGION} --set-env-vars=ROOT_DIR=/usr/share/caddy


