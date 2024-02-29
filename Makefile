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


