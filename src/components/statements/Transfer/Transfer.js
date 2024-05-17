import axios from 'axios';
import React from 'react';
import {
  TRANSFER_API_ENDPOINT_URL
} from '../../../investments/action/action-const';


export default function TransferComponent() {



  const handleSearchSubmit = async e => {
    e.preventDefault();

    axios.post(`${TRANSFER_API_ENDPOINT_URL}/self`)
      .then(response => {
        const data = response.data;
        console.log(data);
      });


  }




  return (
    <div>

      <form onSubmit={handleSearchSubmit}>
        <p>From</p>
        <select
          placeholder="source"
          
        >
          <option>Choose account</option>
         
              <option value="5555 4444 3333 2222" key="5555444433332222">
              5555 4444 3333 2222
              </option>
          
         
        </select>

        <p>To</p>
        <select
          placeholder="destination"
          
        >
          <option>Choose account</option>
         
              <option value="8866 7755 5522 4477" key="8866775555224477">
              8866 7755 5522 4477
              </option>
          
         
        </select>

        <p>Amount</p>
        <input name='amount'></input>


        <p>Date</p>
        <input name='date'></input>


        <div>
          <button type="submit">Transfer</button>
        </div>
      </form>
    

    </div>

  );
}





