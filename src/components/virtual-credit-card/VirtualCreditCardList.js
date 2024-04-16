import {
  React,
  Component
} from 'react';
import API from './api';

export default class VirtualCreditCardList extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    API.post(`/`)
      .then(res => {
        const cards = res.data.data;
        this.setState({ cards });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.cards
            .map(card =>
              <li key={card.id}>{card.lastDigits}</li>
            )
        }
      </ul>
    )
  }
}