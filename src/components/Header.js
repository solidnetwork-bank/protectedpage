import {
    React,
    Component
} from 'react';
import '../static/styles/header.css';
import {
    HEADER_NAME
} from '../model/store-const';
import Menu from './Menu';


export default class Header extends Component {

    render() {


        return (

            <header className="main-header">

                <div className='main-header-menu'>

                    <span className="header-name">{HEADER_NAME}</span>

                    <Menu />

                </div>


                <p className="big-heading">

                    <span className="big-heading-text">Words and words</span>
                    <br />

                    <span className="big-heading-text">more words</span>
                    <br />
                    <span className="big-heading-text">by Words.</span>

                </p>

            </header>

        );

    }

}

