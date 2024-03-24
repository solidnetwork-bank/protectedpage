import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardUpdate extends Component {
  state = {
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

    API.post(`/lock`, { card })
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
          </label>
          <button type="submit">Lock</button>
        </form>
      </div>
    )
  }
}