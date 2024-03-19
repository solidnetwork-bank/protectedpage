import {
  React,
  useState
} from 'react';
import '../static/styles/statements.css';
import Login from '../components/statements/Login/Login';
import Search from '../components/statements/Search/Search';

function Statement({heading}) {
  const [token, setToken] = useState();


  if (!token) {

    return <Login setToken={setToken} />
  }


  return (
    <div>
      <p className='main-section-heading'>{heading}</p>

      <Search />
    </div>

  );

}


export default Statement;