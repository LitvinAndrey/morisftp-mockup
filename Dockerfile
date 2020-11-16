FROM nginx

COPY wrapper.sh /

COPY mockup /usr/share/nginx/html

RUN ["chmod", "+x", "./wrapper.sh"]

CMD ["./wrapper.sh"]
