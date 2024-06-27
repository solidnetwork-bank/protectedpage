import {
  React
} from 'react';
import Search from '../components/accounts/Search/Search';
import '../static/styles/accounts.css';

function Accounts({ heading }) {

  return (
    <div>
      <p className='main-section-heading'>{heading}</p>

      <Search />
    </div>

  );

}


export default Accounts;