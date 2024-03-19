# homepage
The Solid Network Bank Homepage

## Create React App

### Quick Overview
```sh
npx create-react-app my-app
cd my-app
npm start
```

### To create a new app.

```sh
 npx create-react-app homepage
```

### Starts the development server.

 ```sh   
REACT_APP_API_GATEWAY_STAGE=<stage-name> npm start
```

### Bundles the app into static files for production.

```sh
npm run build
```

### Starts the test runner.

```sh
npm test
```

## Make React API Calls

```sh
npm install axios
```

### API and Microservices

### Virtual Credit Cards:

- **list-virtual-credit-cards-service:** read-only microservice

```sh
LIST - 'GET /virtual-credit-cards' - LIST ALL CREDIT CARDS (ACTIVATED STATUS, LAST 4 DIGITS)
```
```sh
READ - 'GET /virtual-credit-cards/{id}' - READ A CREDIT CARD (DISPLAY ALL INFORMATION OF A CREDIT CARD)
```
- **manage-virtual-credit-cards-service:** connected to a third party service

```sh
CREATE - 'POST /virtual-credit-cards' - ADD VIRTUAL CREDIT CARD (ASK FOR A NEW CREDIT CARD TO BE CREATED: 3RD PARTY SERVICES)
```
```sh
UPDATE - 'PUT /virtual-credit-cards/{id}' - UPDATE A CREDIT CARD (UPDATE DYNAMIC CVV)
```
```sh
DELETE - 'DELETE /virtual-credit-cards/{id}' - REMOVE A CREDIT CARD (UPDATE TO DISACTIVATED STATUS)
```