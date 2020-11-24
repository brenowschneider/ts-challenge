# Typescript Code Challenge

Develop a Restful Api that provides an endpoint for comparing product costs based on the given annual comsume in KWh (e.g. 4000)

## Steps for executing the API

1. Clone this repository on your local machine:

`git clone https://github.com/brenowschneider/ts-challenge.git`

2. Make sure to have node.js installed. You can [click here](https://nodejs.org/en/) to go to its web page. 

3. Go to the directory where the solution is located and install npm packages

```javascript
cd /ts-challenge

npm install
```

4. Execute the API

`npm start`


## Endpoints

1. Only one endpoint is provided in the API, which has the pattern "http://localhost/4001/api/comparison/:consume", where consume is represented by a number greater than zero. Here are some examples:

```javascript
http://localhost/4001/api/comparison/1000
http://localhost/4001//api/comparison/2000
http://localhost/4001/api/comparison/4000
```

## Tests

As of now, there are three unit tests implemented. You can run them by executing:

`npm test`