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

### API, Hosts and Microservices

### Whole Site (Frontend)
```sh
bank.solidnetwork.xyz
```

### Sign Up, Sign In, Log Out, Forgot username/password
### Profile, Settings
- **secure-service:** 
```sh
secure.solidnetwork.xyz
```
```sh
'POST /auth/signin' - Sing In (GENERATE JWT TOKEN)
```
```sh
'GET /profile/{id}' - READ PROFILE INFORMATION
```

### Transfers: 
- **transfer-service:** 
```sh
transfer.solidnetwork.xyz
```

### Payments:
- **payment-service:** 
```sh
payment.solidnetwork.xyz
```

### Investments:
- **investment-service:** 
```sh
investment.solidnetwork.xyz
```

### Loans:
- **loan-service:** 
```sh
loan.solidnetwork.xyz
```

### Statements & Documents
- **statement-service:** 
```sh
statement.solidnetwork.xyz
```
```sh
'POST /statement' - (GENERATE PDF STATEMENT)
```

### Accounts: Joint, Savings, Checking, Cards
- **account-service:** 

```sh
account.solidnetwork.xyz
```

### Transactions, Info about account
```sh
'POST /transaction' - (READ ACCOUNT TRANSACTIONS)
```

### Credit Cards:

- **credit-card-service:** 

```sh
LIST - 'GET /credit-card' - LIST ALL CREDIT CARDS (ACTIVATED STATUS, LAST 4 DIGITS)
```
```sh
READ - 'GET /credit-card/{id}' - READ A CREDIT CARD (DISPLAY ALL INFORMATION OF A CREDIT CARD)
```
```sh
CREATE - 'POST /credit-card' - ADD CREDIT CARD (ASK FOR A NEW CREDIT CARD TO BE CREATED: 3RD PARTY SERVICES)
```
```sh
UPDATE - 'PUT /credit-card/{id}' - UPDATE A CREDIT CARD (UPDATE DYNAMIC CVV)
```
```sh
DELETE - 'DELETE /credit-card/{id}' - REMOVE A CREDIT CARD (UPDATE TO DISACTIVATED STATUS)
```