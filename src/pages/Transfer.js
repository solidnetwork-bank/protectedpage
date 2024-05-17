import {
  React
} from 'react';

import '../static/styles/transfer.css';
import TransferComponent from '../components/statements/Transfer/Transfer';

function Transfer({ heading }) {

  return (
    <div>
      <p className='main-section-heading'>{heading}</p>

      <TransferComponent />
    </div>

  );

}


export default Transfer;