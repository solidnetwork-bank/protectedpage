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

### Homepage Site (Frontend)
```sh
bank.solidnetwork.xyz
```

### Protected Site (Frontend)
```sh
online.solidnetwork.xyz
```

### Sign Up, Sign In, Log Out, Forgot username/password, Profile, Settings
- **secure-service:** 
```sh
secure.solidnetwork.xyz
```
```sh
'POST /auth/signin' - Sing In (GENERATE JWT TOKEN)
```
```sh
'POST /profile' - READ PROFILE INFORMATION
```

### Transfers
- **transfer-service:** 
```sh
transfer.solidnetwork.xyz
```

### Payments
- **payment-service:** 
```sh
payment.solidnetwork.xyz
```

### Investments: CD
- **investment-service:** 
```sh
investment.solidnetwork.xyz
```

### Loans
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

### Accounts: Joint, Savings, Checking
- **account-service:** 

```sh
account.solidnetwork.xyz
```
```sh
'POST /transaction' - (READ ACCOUNT TRANSACTIONS)
```
```sh
'POST /transaction/detail' - (READ TRANSACTION DETAIL)
```

### Cards: Debit and Credit
```sh
card.solidnetwork.xyz
```

- **card-service:** 

```sh
LIST - 'POST /card' - LIST ALL CARDS (ACTIVATED STATUS, LAST 4 DIGITS)
```
```sh
READ - 'POST /card/detail' - READ A CARD (CARD DETAIL)
```
```sh
CREATE - 'POST /card/request' - RESQUEST A NEW CREDIT CARD (CREDIT CARD ONLY)
```
```sh
UPDATE - 'POST /card/replace' - REPLACE A CARD (DAMAGED OR STOLEN: UPDATE TO DISACTIVATED STATUS)
```
```sh
UPDATE - 'POST /card/lock' - LOCK AND UNLOCK A CARD
```