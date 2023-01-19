import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCard,
    } = this.props;

    let superTrunfo;
    if (cardTrunfo) {
      superTrunfo = <p data-testid="trunfo-card">Super Trunfo</p>;
    }
    return (
      savedCard.map((element) =>
        <div key={ element.cardName} style= { {border: 'red 2px solid'}}>
          <p data-testid="name-card">
            { element.cardName }
          </p>
          <img src={ element.cardImage } alt={ element.cardName } data-testid="image-card" />
          <p data-testid="description-card">{element.cardDescription}</p>
          <p data-testid="attr1-card">{element.cardAttr1}</p>
          <p data-testid="attr2-card">{element.cardAttr2}</p>
          <p data-testid="attr3-card">{element.cardAttr3}</p>
          <p data-testid="rare-card">{element.cardRare}</p>
          {superTrunfo}
        </div>
      )
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.string,
}.isRequired;
