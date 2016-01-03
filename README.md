# EYEoT Server


## Run the app locally

1. [Install Node.js][]
2. Download and extract the starter code from the Bluemix UI
3. cd into the app directory
4. Run `npm install` to install the app's dependencies
5. Run `npm start` to start the app
6. Access the running app in a browser at http://localhost:6001

[Install Node.js]: https://nodejs.org/en/download/


##  APIs

### Base URL

http://attdevtest.mybluemix.net

### POST /voice

HTTP Request
```
Header:
{
    'Content-Type': 'audio/wav'
}
Body:
wave file
```

HTTP Response
```
Success:
{
    'application_code': 200,
    'resultText': 'Test.'
}
Failure:
{
    'application_code': 400,
    'resultText': ''
}
```
