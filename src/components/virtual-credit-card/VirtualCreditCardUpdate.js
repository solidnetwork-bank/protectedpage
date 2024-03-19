import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardUpdate extends Component {
  state = {
    id: '',
    cvv: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
    this.setState({ cvv: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const card = {
      id: this.state.id,
      cvv: this.state.cvv
    };

    API.put(`virtual-credit-cards/${this.state.id}`, { card })
      .then(res => {
        this.props.updateMessage(res.data.message)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card Id:
            <input type="text" name="card-id" onChange={this.handleChange} />
            Card new CVV:
            <input type="text" name="card-cvv" onChange={this.handleChange} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}