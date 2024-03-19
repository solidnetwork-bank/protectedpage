import {
    React,
    Component
} from 'react';
import '../static/styles/home.css';
import ContentRow from '../components/ContentRow';
import storeNoRedux from '../model/store-no-redux';


export default class Home extends Component {

    render() {

        return (

            <div>

                <p className='main-section-heading'>{this.props.heading}</p>

                <div className='home-page-content'>

                    {
                        storeNoRedux.news.map((dataRow) =>
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





