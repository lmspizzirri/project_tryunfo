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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCard: [],
  };

  handleClick = (param) => {
    const { savedCard } = this.state;
    const newCards = savedCard.filter((element) => element.cardName !== param);
    this.setState({
      savedCard: [...newCards],
      hasTrunfo: false,
    });
    const deletedCard = savedCard.filter((element) => element.cardName === param);
    if (deletedCard.cardTrunfo === true) {
      this.setState({
        hasTrunfo: false,
      });
    }
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
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const cardInfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      savedCard: [...prevState.savedCard, cardInfo],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    }));
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
    const { savedCard } = this.state;
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
        { savedCard.map((element) => (
          <>
            <Card
              { ...element }
              key={ element.cardName }
            />
            <button
              data-testid="delete-button"
              onClick={ () => this.handleClick(element.cardName) }
              type="button"
            >
              Excluir
            </button>
          </>))}
      </div>
    );
  }
}

export default App;
