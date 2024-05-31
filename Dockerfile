FROM caddy:2.8.1-alpine
ADD build /usr/share/caddy
ADD Caddyfile /etc/caddy/Caddyfile
