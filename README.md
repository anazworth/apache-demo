# apache-demo

To run in a Docker container:

```bash
git clone https://github.com/anazworth/apache-demo && \
cd apache-demo && \
docker run -d --rm --name apache-demo -p 8080:80 -v ${PWD}:/usr/local/apache2/htdocs httpd
```
