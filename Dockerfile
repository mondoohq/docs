FROM caddy:2.10.0-alpine
ADD build /usr/share/caddy
ADD Caddyfile /etc/caddy/Caddyfile
