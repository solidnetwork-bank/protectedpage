import {
  React
} from 'react';
import Search from '../components/statements/Search/Search';
import '../static/styles/statements.css';

function Statement({ heading }) {

  return (
    <div>
      <p className='main-section-heading'>{heading}</p>

      <Search />
    </div>

  );

}


export default Statement;