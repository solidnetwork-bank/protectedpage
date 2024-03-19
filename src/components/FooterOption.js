import {
    React,
    Component
} from 'react';
import '../static/styles/footer-option.css';

export default class FooterOption extends Component {

    render() {

        return (

            <li className={this.props.opt.li.name}>
                <a
                    className={this.props.opt.anchor.name}
                    rel='noreferrer'
                    href={this.props.opt.anchor.href}
                    target="_blank">
                    <span className={this.props.opt.span.name} ></span>
                </a>
            </li>


        );

    }
}
