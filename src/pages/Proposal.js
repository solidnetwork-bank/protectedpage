import {
    React,
    Component
} from 'react';
import '../static/styles/proposal.css';
import TextRow from '../components/TextRow';
import ProposalRow from '../components/ProposalRow';


export default class Proposal extends Component {

    render() {

        if (this.props.isOrder) {
            return (

                <div>

                    <p className='main-section-heading'>{this.props.heading}</p>

                    <div className='proposal-main-section'>

                        <ol className='proposal-list-main-section'>

                            {
                                this.props.data.map((proposalRow) =>
                                    <ProposalRow
                                        key={proposalRow.idx}
                                        heading={proposalRow.heading}
                                        textRows={

                                            proposalRow.textRows.map((dataRow) =>
                                                <TextRow
                                                    key={dataRow.idx}
                                                    content={dataRow.content} />
                                            )
                                        }


                                    />
                                )

                            }

                        </ol>

                    </div>

                </div>

            );
        } else {
            return (

                <div>

                    <p className='main-section-heading'>{this.props.heading}</p>

                    <div className='proposal-main-section'>

                        <ul className='proposal-un-list-main-section'>

                            {
                                this.props.data.map((proposalRow) =>
                                    <ProposalRow
                                        key={proposalRow.idx}
                                        heading={proposalRow.heading}
                                        textRows={

                                            proposalRow.textRows.map((dataRow) =>
                                                <TextRow
                                                    key={dataRow.idx}
                                                    content={dataRow.content} />
                                            )
                                        }


                                    />
                                )

                            }

                        </ul>

                    </div>

                </div>

            );
        }


    }
}




