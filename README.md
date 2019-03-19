# cms

This application is based on the app from the strapi strapi tutorial.  I have created a test framework modeled after https://strapi.io/documentation/1.x.x/testing.html 
Before running npm test you will need to
                          - npm install co-supertest 
                          - npm install supertest 
                          - npm install chai

There are a total of 6 small tests that are implemented in restaurant.test.js

JER 3/19/19: I have also updated config/functions/bootstrap.js to do an intial insert into the DB prior to starting the server.
