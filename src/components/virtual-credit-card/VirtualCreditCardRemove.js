import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardRemove extends Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    API.delete(`virtual-credit-cards/${this.state.id}`)
      .then(res => {
        this.props.updateMessage(res.data.message)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card ID:
            <input type="number" name="card-id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}