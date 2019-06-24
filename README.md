# Expressio 

express.js with socket.io and frontend app for rapid start.
frontend and backend connected with the x-handler on the client and server
by default the x-handler contains simple [chat app](https://expressio-chat.herokuapp.com/) 
## x-handler client
use this data attributes inside any of the following tags:
form,button,a, and any form input tag
 ```
data-request-url="/"                                 --url (default is current)
data-request="onUserType"                            --the function to invoke inside server x-handler
data-request-data="id: 7"                            --additional data
data-request-confirm="confirm?"                      --before send event
data-request-redirect=""                             --redirect after success
data-request-error=""                                --handle error
data-request-complete=""                             --after complete(success or not)
data-request-loading="loading"                       --loading style
data-request-update="'mypartial': '#response'"       --update specific element after success(response must have the partial name and data)
data-request-before-update="beforeUpdate(data)"      --before update function
data-request-success="onSuccess(data)"               --if success then..
data-track-input                                     --keep track changes (works on input text,number,password), if change new request will be made
 ```
 ## x-handler server
 this module includes the x-handler server methods and socket.io data object
 also contains an app folder for rendering partials, by default its used twig templating and could be changed.
## DB
db.js on the app root using mysql by default, could be changed and used any where on the app.
the connection details must be added to the .env file 
## env
```
BLOCKCHAIN_API=
DB_HOST=
DB_USER= 
DB_PASSWORD=
DB_DATABASE=
```
