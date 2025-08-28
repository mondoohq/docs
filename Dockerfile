FROM caddy:2.10.2-alpine
ADD build /usr/share/caddy
ADD Caddyfile /etc/caddy/Caddyfile
