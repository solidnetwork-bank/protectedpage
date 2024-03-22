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

### Hosts, APIs and Microservices

### Homepage Site (Frontend)
**Host**:
```sh
bank.solidnetwork.xyz
```

### Protected Site (Frontend)
**Host**:
```sh
online.solidnetwork.xyz
```

### Sign Up. Sign In. Log Out. Forgot username. Forgot password .Profile .Settings.
**Host**:
```sh
secure.solidnetwork.xyz
```
**Rest Api**:
- **Secure Rest Api**
- **Methods**:
```sh
'POST /auth/signin' - Sing In (GENERATE JWT TOKEN)
```
```sh
'POST /profile' - READ PROFILE INFORMATION
```
**Microservices:**
- **secure-service:** 

### Transfers.
**Host**:
```sh
transfer.solidnetwork.xyz
```
**Rest Api**:
- **Transfer Rest Api**
- **Methods**:

**Microservices:**
- **transfer-service:** 

### Payments.
**Host**:
```sh
payment.solidnetwork.xyz
```
**Rest Api**:
- **Payment Rest Api**
- **Methods**:

**Microservices:**
- **payment-service:** 

### Investment. CD.
**Host**:
```sh
investment.solidnetwork.xyz
```
**Rest Api**:
- **Investment Rest Api**
- **Methods**:

**Microservices:**
- **investment-service:** 

### Loans.
**Host**:
```sh
loan.solidnetwork.xyz
```
**Rest Api**:
- **Loan Rest Api**
- **Methods**:

**Microservices:**
- **loan-service:** 

### Statements. Documents.
**Host**:
```sh
statement.solidnetwork.xyz
```
**Rest Api**:
- **Statement Rest Api**
- **Methods**:
```sh
'POST /statement' - (GENERATE PDF STATEMENT)
```
**Microservices:**
- **statement-service:** 
### Accounts. Joint Account. Savings Account. Checking Account.
**Host**:
```sh
account.solidnetwork.xyz
```
**Rest Api**:
- **Account Rest Api**
- **Methods**:
```sh
'POST /transaction' - (READ ACCOUNT TRANSACTIONS)
```
```sh
'POST /transaction/detail' - (READ TRANSACTION DETAIL)
```
**Microservices:**
- **account-service:** 

### Cards. Debit Cards. Credit Cards.
**Host**:
```sh
card.solidnetwork.xyz
```
**Rest Api**:
- **Card Rest Api**
- **Methods**:
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
**Microservices:**
- **card-service** 