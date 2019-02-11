import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null
    };
  }

  handleChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter />
        <FilteredFruitList
          filter={this.state.selectedFilter} />
      </div>
    );
  }
}

export default FruitBasket;
