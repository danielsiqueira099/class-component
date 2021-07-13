import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  state = {
    texto: "Turma React"
  }
  handleClick() {
    alert("Alerta ativado!")
  }
  handleTextChange(e) {
    this.setState({
      texto: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Hello Word, {this.props.name}</h1>
        <input type="text" onChange={this.handleTextChange.bind(this)}/>
        <h2>{this.state.texto}</h2>
        <button onClick={this.handleClick.bind(this)}>Exibir Alerta</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"Daniel Siqueira de Sousa"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

