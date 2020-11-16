FROM nginx

COPY wrapper.sh /

COPY mockup /usr/share/nginx/html

CMD ["./wrapper.sh"]
