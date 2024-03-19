import {
  React,
  Component
} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../static/styles/main-container.css';
import MainSection from '../components/MainSection';


export default class MainContainer extends Component {

  render() {

    return (
      <div className='main-container'>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );

  }

}

