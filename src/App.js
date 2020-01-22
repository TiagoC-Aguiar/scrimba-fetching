import React, { Component } from 'react'

import api from './services/api'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    api.get('people/1').then(
      response => {
        this.setState({
          loading: false,
          character: response.data,
        })
      }
    )    
  }

  render() {

    const text = this.state.loading ? "Loading..." : 'Nome: ' + this.state.character.name

    return (
      <div className="App">
        {text}
      </div>
    )

  }
  
}

export default App
