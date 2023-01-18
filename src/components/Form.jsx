import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <>
        <input
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
          name="cardName"
        />
        <input
          type="textarea"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          name="cardDescription"
        />
        <input
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
          name="cardAttr1"
          min="0"
        />
        <input
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
          name="cardAttr2"
          min="0"
        />
        <input
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
          name="cardAttr3"
          min="0"
        />
        <input
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
          name="cardImage"
        />
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
          name="cardRare"
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
        />
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.string,
}.isRequired;
