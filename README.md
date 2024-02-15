# Software Engineering

This project was made for the course of Software engineering NTUA. We were asked to make a system with movies details

## Technology Stack

* MySQL for the database
* NodeJS and Express for the server
* NextJS and React for the front end

## Back-end

The backend folder contains:

* controllers: The logic of the routes.
* middlewares: Files like authentication, authorization, upload.
* routes: All routes that are being used in the project. Each route starts with http://localhost:9876/ntuaflix_api/{service}, where {service} is each file in routes folder. Each service has certain endpoints.
* test: Contains the tests that were written in order to check all of our endpoints. Jest and postman scripts were used for the testing.
* uploads: In this folder all uploads are been uploaded.

## How to set up backend
1. Make sure your current directory is `softeng23-14/back-end`
2. Create .env under repo's `backend` folder with your credentials for:
    - `DB_HOST` 
    - `DB_USER`
    - `DB_PASS`

### **To start the backend:**

First you need to write *npm install* if you didn't already. To start use the command *npm start*.

### **To test the backend:**

To run the tests use *npm test*, or import the postman collection to postman and run it.

## Cli-client

Cli-client commands:
* login : se2314 login --username &lt;username&gt; --passw &lt;password&gt;
* logout: se2314 logout
* add admin: se2314 adduser --username &lt;username&gt; --passw &lt;password&gt;
* view user: se2314 user --username &lt;username&gt;
* healthcheck: se2314 healthcheck
* resetall database: se2314 reset
* upload title basics file: se2314 newtitles --filenme &lt;path_to_file&gt;
* upload title aka file: se2314 newakas --filenme &lt;path_to_file&gt;
* upload name basics file: se2314 newnames --filenme &lt;path_to_file&gt;
* upload title crew file: se2314 newcrew --filenme &lt;path_to_file&gt;
* upload title episode file: se2314 newepisode --filenme &lt;path_to_file&gt;
* upload title principals file: se2314 newprincipals --filenme &lt;path_to_file&gt;
* upload title ratings file: se2314 newratings --filenme &lt;path_to_file&gt;
* information about a movie: se2314 title --titleID &lt;titleID&gt;
* search movie: se2314 searchtitle --titlepart &lt;titlepart&gt;
* search by genre: se2314 bygenre --genre &lt;genre&gt; --min &lt;min_rating&gt; (--from &lt;start_year&gt;) (--to &lt;end_year&gt;)
* information about a crew member: se2314 name --nameid &lt;nameid&gt;
* search crew member: se2314 searchname --name &lt;namepart&gt;


### **To run any commands in the cli-client:**

First you need to write *npm install* if you didn't already. Next write *npm install -g*. Then you can use the commands that are been specified if you write **se2314**.

### **To test the cli-client (constructURL):**

To run the tests use *npm test*.

## Front-end



### **To run the front-end:**

First you need to write *npm install* if you didn't already. To start the front-end use *npm start*.