import {
    React,
    Component
} from 'react';
import '../static/styles/content-row.css';
import LinkPin from './LinkPin';


export default class ContentRow extends Component {

    render() {


        return (


            <div className="content-row">
                <div className="content-author">
                    <a className='author-link' rel='noreferrer' target="_blank" href={this.props.author.link.href}>
                        <img className='author-img' alt={this.props.author.img.alt} src={this.props.author.img.src} />
                        <span className='author-name'>{this.props.author.name}</span>
                    </a>
                </div>
                <div className="content-link">
                    <LinkPin isPinned={this.props.content.isPinned} />
                    <a className='link-anchor' rel='noreferrer' target="_blank" href={this.props.link.anchor.href}>
                        <h2 className='link-heading'>{this.props.link.heading}</h2>
                    </a>
                </div>
                <div className="content-date">
                    <span>{this.props.content.date}</span>
                </div>
            </div>


        );

    }
}