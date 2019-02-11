import React from 'react'

import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

const FruitBasket = (props) => {


  const handleChange = event => {
    console.log('new filter: ', event.target.value)
    props.setState({ currentFilter: event.target.value })
  }
  
  return (
    <div className="fruit-basket">
      <Filter />
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
