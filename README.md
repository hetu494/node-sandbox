# node-sandbox

# STEPS:

1. Download the folder
2. Add your api key in docker-compose
3. Run `docker-compose build` to build the docker image
4. Run `docker-compose up` to spin up the containers
5. Open Chrome and hit `http://localhost:4000/api/contacts` or `http://localhost:4000/api/`
6. User curl to add data
```
curl -X POST \
  http://localhost:4000/api/contacts/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: f032b670-b8e0-409a-b817-37ae6cac1868' \
  -H 'cache-control: no-cache' \
  -d 'name=Hetansh&email=sample@gmail.com&phone=12345678&gender=Male&undefined='
 ```
7. You can see the data by going to `http://localhost:4000/api/contacts` from you chrome browser
8. See traces in your account


Remember to run `docker-compose down` to stop and remove the containers
