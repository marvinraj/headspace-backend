# headspace `backend`

## about this file
the purpose of this file to document my work on building my first fullstack webapp (this file focuses on the backend)

## project details
- the backend of the project utilizes nodejs and mongodb

## what did i do?
- setup nodejs
    - create package.json file `npm init -y`
    - install packages `npm install express mongoose dotenv`
    - install nodemon `npm i nodemon -D`
    - create .env and .gitignore files
    - create "server.js" file --> serves as the entry point in the backend app.
    - create a simple express server for now
- created a project and cluster in mongodb
- connected project to mongodb
    - create a "config" folder with db.js to establish database connection
    - create "models" folder --> contains the database models or schemas.
    - .env file has the connection string to be used in the server.js
- create API endpoints/routes
    - create "routes" folder --> for the API routes.
    - create "controllers" folder --> each route can have its own controller file. these files contain the logic for handling requests, processing data and generating response.
- test the API endpoints using postman
    


# might look into this
- [deploy a mern stack project using render](https://dev.to/kunalukey/how-to-setup-and-deploy-a-mern-stack-project-for-free-5acl)
- [setup and push nodejs project to github](https://medium.com/@rikhisobari20/how-to-build-server-using-express-basic-push-our-code-to-github-bb77d1b46f14)
- [Structuring Your MERN Stack Project: Best Practices and Organization](https://masterlwa.medium.com/structuring-your-mern-stack-project-best-practices-and-organization-5776861e2c92)
- [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)