import {
    React,
    Component
} from 'react';
import '../static/styles/text-row.css';

export default class TextRow extends Component {

    render() {

        return (

            <p className='text-row-content-text'>
                {this.props.content}
            </p>

        );

    }

}

