FROM caddy:2.7.6-alpine
ADD build /usr/share/caddy
ADD Caddyfile /etc/caddy/Caddyfile
