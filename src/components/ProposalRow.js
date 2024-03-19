import {
    React,
    Component
} from 'react';
import '../static/styles/proposal-row.css';

export default class ProposalRow extends Component {

    render() {

        return (


            <li className='proposal-row-content-heading'>
                <span className='proposal-row-content-heading'>{this.props.heading}</span>

                {this.props.textRows}


            </li>


        );

    }

}



