import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardDisplay extends Component {
  state = {
    card: {},
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const card = {
      id: this.state.id
    };

    API.post(`/detail`, { card })
      .then(res => {
        const card = res.data.data;
        this.setState({ card });
      })
  }


  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Card ID:
              <input type="number" name="card-id" onChange={this.handleChange} />
            </label>
            <button type="submit">Display</button>
          </form>
        </div>
        <div>
          <p>Card number: {this.state.card.number}</p>
          <p>Expiration date: {this.state.card.expiration}</p>
          <p>Card holder name: {this.state.card.holder}</p>
          <p>CVV: {this.state.card.cvv}</p>
        </div>
      </div>
    )
  }
}