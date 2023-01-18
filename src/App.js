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
    cardTrunfo: '',
    hasTrunfo: true,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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
