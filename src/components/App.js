import React, { Component } from 'react'

import FruitBasket from './FruitBasket'

class App extends Component {
	constructor(props) {
	    super(props)

	    this.state = {
	      fruit: [],
	      filters: [],
	      currentFilter: null
	    }
    }

    render() {
	    return (
	      <FruitBasket />
	    )
	}

}

export default App
