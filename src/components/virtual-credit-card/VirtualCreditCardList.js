import {
  Component,
  React
} from 'react';
import API from './api';

export default class VirtualCreditCardList extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    API.post(`/`)
      .then(response => {
        const data = response.data;
        console.log(data);
        const cards = data.cards;
        this.setState({ cards });
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.cards
            .map(card =>
              <li key={card.number}>{card.lastDigits}</li>
            )
        }
      </ul>
    )
  }
}