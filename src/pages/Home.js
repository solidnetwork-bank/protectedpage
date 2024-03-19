import {
    React,
    Component
} from 'react';
import '../static/styles/home.css';
import ContentRow from '../components/ContentRow';
import store from '../model/store';


export default class Home extends Component {

    render() {

        return (

            <div>

                <p className='main-section-heading'>{this.props.heading}</p>

                <div className='home-page-content'>

                    {
                        store.news.map((dataRow) =>
                            <ContentRow
                                key={dataRow.idx}
                                author={dataRow.author}
                                link={dataRow.link}
                                content={dataRow.content} />
                        )
                    }

                </div>

            </div>

        );

    }
}





