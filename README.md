
## Technical test for full stack developer -  Internship (Famoco)
## Introduction
This is a simple  application built off Django (including the Django REST Framework for API CRUD operations),  React and boostrap.

 It allows you to create user accounts on a back-office through an API
## Running Example

## Requirements
1)Python3

2)Pipenv

## How to Run
#### I) backend (django)
    1.Clone the project to your machine
    2.Navigate into the diretory :  cd famoco/test/test1
    3.Activate the virtual environment: pipenv shell
    4.Install the dependencies: pipenv install -r requirements.txt 
    5.run django server: python manage.py runserver
  
#### II) frontend (React)
    1.Navigate into the frontend directory: cd famoco/front-end-react/register-user
    2.Install the dependencies: npm install
    3.run the server : npm start
  #### Running example 
  ![Screenshot from 2022-02-19 21-14-03](https://user-images.githubusercontent.com/56828148/154817851-a665be46-2c6f-4ff5-97b3-c6f83d214b7f.png) ![Screenshot from 2022-02-19 21-17-17](https://user-images.githubusercontent.com/56828148/154817957-b2229bb9-95ab-49b0-950f-65751c553b43.png)
## Run it
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

Run this command to start the backend server in the backend directory: python manage.py runserver (make sure it run on port http://127.0.0.1:8000/ because the fetch api(front end) use this url to post user's information.if somehow that port is not available make sure to change the fetch api to use the right url.  
Run this command to start the frontend development server in the frontend directory: npm install then npm start (This will start the frontend on the adddress localhost:3000)
## Test
#### I)Unit test
    I have written couple of Django’s unit tests. to test ir run: python manage.py test 
### II) postman
     
#### 1.Register: 
    POST / http://127.0.0.1:8000/users-management/create
      body:{"username":"your usename","first_name":"your firstname","last_name":"your lastname","password":"your password"}
    ![Screenshot from 2022-02-19 21-31-48](https://user-images.githubusercontent.com/56828148/154818239-442fd22b-4bb4-450a-a73b-c8bb103df8f1.png)
#### 2. Login
        POST / http://127.0.0.1:8000/users-management/login
                body : {"username":"your username","password":"your password"}
    ![Screenshot from 2022-02-19 21-32-18](https://user-images.githubusercontent.com/56828148/154818249-06a7bcdf-20e8-44f0-b642-478478032a63.png)
  
#### 3. Authenticated
    GET / http://127.0.0.1:8000/users-management/user
    you need to be authenticated to get the list of users
    I have used jwt to generate an access token .It will be stored in the cookie
   ![Screenshot from 2022-02-19 21-33-06](https://user-images.githubusercontent.com/56828148/154818276-6d773de4-9a5f-425c-af69-7dfc29ea6e82.png)
#### 4. Logout 
        POST / http://127.0.0.1:8000/users-management/logout
   ![Screenshot from 2022-02-19 21-33-29](https://user-images.githubusercontent.com/56828148/154818286-038f433b-152b-45cd-9970-313f512abde1.png)
  
# Creator Credit


Over the course of writing this application, I was thoroughly supported by traversy media i relied heavily on his crash course react( you can find it on youtube) and the react documention which is the best documention i have ever dealt with so far. it is well written.

1. Traversy's tuto :https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=4407s
2. react documention:https://reactjs.org/docs/getting-started.html


