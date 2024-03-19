import {
  React,
  Component
} from 'react';
import VirtualCreditCardAdd from '../components/virtual-credit-card/VirtualCreditCardAdd';
import VirtualCreditCardDisplay from '../components/virtual-credit-card/VirtualCreditCardDisplay';
import VirtualCreditCardList from '../components/virtual-credit-card/VirtualCreditCardList';
import VirtualCreditCardRemove from '../components/virtual-credit-card/VirtualCreditCardRemove';
import VirtualCreditCardUpdate from '../components/virtual-credit-card/VirtualCreditCardUpdate';
import Message from '../components/virtual-credit-card/Message';

export default class VirtualCreditCard extends Component {
  constructor(props) {
    super(props)

    this.updateMessage.bind(this);
  }

  state = {
    message: ''
  }


  updateMessage = (message) => {
    this.setState({
      message: message
    },
      () => setTimeout(() => this.setState({ message: '' }), 6000)
    );

  }

  render() {

    return (
      <div>
        <p className='main-section-heading'>{this.props.heading}</p>
        <Message message={this.state.message} />
        <h2>Options:</h2>
        <p>My Virtual Credit Cards:</p>
        <VirtualCreditCardList />
        <p>Display my Virtual Credit Card information:</p>
        <VirtualCreditCardDisplay />
        <p>Request a new Virtual Credit Card:</p>
        <VirtualCreditCardAdd updateMessage={this.updateMessage} />
        <p>Remove a Virtual Credit Card:</p>
        <VirtualCreditCardRemove updateMessage={this.updateMessage} />
        <p>Generate a new Dynamic CVV:</p>
        <VirtualCreditCardUpdate updateMessage={this.updateMessage} />
      </div>
    );
  }
}


