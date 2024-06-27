import axios from 'axios';
import React, { useState } from 'react';
import {
  ACCOUNT_API_ENDPOINT_URL
} from '../../../investments/action/action-const';
import { dataStatement } from '../../../model/statements';

export default function Search() {
  const [statementDetail, setStatementDetail] = useState({
    account: "",
    deposits: [],
    withdrawals: [],
    fees: []
  });

  const [selectedAccount, setSelectedAccount] = useState();
  const [hasData, setHasData] = useState({ status: false });

  const handleSearchSubmit = async e => {
    e.preventDefault();

    const account = {
      id: selectedAccount
    };

    axios.post(`${ACCOUNT_API_ENDPOINT_URL}/transaction`, { account })
      .then(response => {
        const data = response.data;
        console.log(data);
        setStatementDetail(data);
        setHasData(true);
      });


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


        <div>
          <button type="submit">All Transactions</button>
        </div>
      </form>

      {
        hasData &&


        <div>
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

      }

    </div>

  );
}





