import React from 'react'

import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

const FruitBasket = (props) => {
  
  const updateFilterCallback = event => {
    console.log('new filter: ', event.target.value)
    props.App.setState({ currentFilter: event.target.value })
  }

  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} />
      <FilteredFruitList
        filter={props.currentFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: 'all',
  filters: "all",
  currentFilter: "all",
  updateFilterCallback: 'all'
}

export default FruitBasket
