import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  state = {
    taks : [],
    valor : ''
  }


  onChange = event => {
    this.setState({valor: event.target.value})
  }

  onKeyPress = event => {
    if (event.key === 'Enter') {
      const newTaks = [ ...this.state.taks, event.target.value]
      this.setState({
        taks : newTaks,
        valor : ''
      })
    }
  }

  
  render() {

    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
            <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.taks.map( tak => <li key = {tak}>{tak}</li> )}
          </ul>
           <form>
            <input
              type="text"
              id="new-task" 
              placeholder="Ingresa una tarea y oprime Enter" 
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
              value = {this.state.valor}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;
