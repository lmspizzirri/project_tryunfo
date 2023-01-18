import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: true,
    isSaveButtonDisabled: true,
  };

  onSaveButtonClick = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo } = this.state;
    this.setState({
      savedCard: [{ cardName },
        { cardDescription },
        { cardAttr1 },
        { cardAttr2 },
        { cardAttr3 },
        { cardImage },
        { cardRare },
        { cardTrunfo },
        { hasTrunfo },
      ],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    });
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, this.validate);
  };

  validate = () => {
    const { cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare } = this.state;
    const controlMax = 210;
    const controlMin = 90;
    const validation = cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && +cardAttr1 + +cardAttr2 + +cardAttr3 <= controlMax
    && +cardAttr1 >= 0 && +cardAttr1 <= controlMin
    && +cardAttr2 >= 0 && +cardAttr2 <= controlMin
    && +cardAttr3 >= 0 && +cardAttr3 <= controlMin;
    this.setState({
      isSaveButtonDisabled: !(validation), // Essa foi dica :)
    });
  };

  render() {
    const { ...state } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...state }
        />
      </div>
    );
  }
}

export default App;
