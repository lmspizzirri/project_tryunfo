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

  onInputChange = ({ target }) => {
    const { cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
    const somatory = cardAttr1 + cardAttr2 + cardAttr3;
    const controlMax = 210;
    const controlMin = 90;
    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && somatory <= controlMax
    && somatory >= controlMin) {
      this.setState({
        [name]: value,
        isSaveButtonDisabled: false,

      });
    }
    this.setState({
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
        />
        <Card
          { ...state }
        />
      </div>
    );
  }
}

export default App;
