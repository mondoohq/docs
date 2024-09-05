FROM caddy:2.8.4-alpine
ADD build /usr/share/caddy
ADD Caddyfile /etc/caddy/Caddyfile
