import {
  Component,
  React
} from 'react';
import API from './api';

export default class VirtualCreditCardAdd extends Component {


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


    API.post(`/request`, { card })
      .then(response => {
        const data = response.data;
        console.log(data);
        this.props.updateMessage(data.message)
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Id:
            <input type="text" name="person-id" onChange={this.handleChange} />
          </label>
          <button type="submit">Request</button>
        </form>
      </div>
    )
  }
}