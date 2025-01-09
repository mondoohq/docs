FROM caddy:2.9.1-alpine
ADD build /usr/share/caddy
ADD Caddyfile /etc/caddy/Caddyfile
