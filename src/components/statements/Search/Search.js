import React, { useState } from 'react';
import { dataStatement } from '../../../model/statements'
import axios from 'axios';
import {
  ACCOUNT_API_ENDPOINT_URL
} from '../../../investments/action/action-const';

export default function Search() {
  const [statementDetail, setStatementDetail] = useState({
    account: "",
    deposits: [],
    withdrawals: [],
    fees: []
  });

  const [selectedAccount, setSelectedAccount] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [selectedDocument, setSelectedDocument] = useState();
  const [selectedStatement, setSelectedStatement] = useState();


  const availableYear = dataStatement.accounts.find((account) => account.id === selectedAccount);
  const availableDocument = availableYear?.years.find((year) => year.id === selectedYear);
  const availableStatement = availableDocument?.documents.find((document) => document.id === selectedDocument);




  const handleSearchSubmit = async e => {
    e.preventDefault();

    const statement = {
      id: selectedStatement
    };

    axios.post(`${ACCOUNT_API_ENDPOINT_URL}/transaction`, { statement })
      .then(res => {
        processResponse(res);
      })

    const processResponse = (response) => {
      setStatementDetail(response.data.data)
    }
  }




  return (
    <div>

      <form onSubmit={handleSearchSubmit}>
        <p>Account</p>
        <select
          placeholder="Account"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          <option>--Account--</option>
          {dataStatement.accounts.map((value, key) => {
            return (
              <option value={value.id} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>


        <p>Year</p>
        <select
          placeholder="Year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option>--Year--</option>
          {availableYear?.years.map((e, key) => {
            return (
              <option value={e.id} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>


        <p>Document</p>
        <select
          placeholder="Document"
          value={selectedDocument}
          onChange={(e) => setSelectedDocument(e.target.value)}
        >
          <option>--Document--</option>
          {availableDocument?.documents.map((e, key) => {
            return (
              <option value={e.id} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>



        <p>Statement</p>
        <select
          placeholder="Statement"
          value={selectedStatement}
          onChange={(e) => setSelectedStatement(e.target.value)}
        >
          <option>--Statement--</option>
          {availableStatement?.statements.map((e, key) => {
            return (
              <option value={e.id} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>



        <div>
          <button type="submit">Find</button>
        </div>
      </form>
      <h3>Transactions</h3>
      <p>Account # {statementDetail.account}</p>
      <table Style={"border-collapse: collapse;"}>
        <tbody>
          <tr>
            <td colSpan={3} ><b>Deposit and other additions</b></td>
          </tr>
          <tr Style={"border-bottom: solid 1px black;"}>
            <td>Date</td>
            <td>Description</td>
            <td>Amount</td>
          </tr>
          {
            statementDetail.deposits.map((deposit, key) =>
              <tr key={key} Style={"border-bottom: solid 1px black;"}>
                <td>{deposit.date}</td>
                <td>{deposit.desc}</td>
                <td>{deposit.amount}</td>
              </tr>
            )
          }
          <tr>
            <td colSpan={3}> <b>Withdrawals and other subtractions</b></td>
          </tr>
          <tr Style={"border-bottom: solid 1px black;"}>
            <td>Date</td>
            <td>Description</td>
            <td>Amount</td>
          </tr>
          {
            statementDetail.withdrawals.map((withdrawal, key) =>
              <tr key={key} Style={"border-bottom: solid 1px black;"}>
                <td>{withdrawal.date}</td>
                <td>{withdrawal.desc}</td>
                <td>{withdrawal.amount}</td>
              </tr>
            )
          }
          <tr>
            <td colSpan={3}><b>Service fees</b></td>
          </tr>
          <tr Style={"border-bottom: solid 1px black;"}>
            <td>Date</td>
            <td>Description</td>
            <td>Amount</td>
          </tr>
          {
            statementDetail.fees.map((fee, key) =>
              <tr key={key} Style={"border-bottom: solid 1px black;"}>
                <td>{fee.date}</td>
                <td>{fee.desc}</td>
                <td>{fee.amount}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>

  );
}





