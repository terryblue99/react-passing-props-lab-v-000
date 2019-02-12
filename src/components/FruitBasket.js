import React from 'react'
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

const FruitBasket = ({ fruit, filters, currentFilter, changeFilter }) =>
  <div className="fruit-basket">
    <Filter filters={filters} handleChange={changeFilter} />
    <FilteredFruitList fruit={fruit} filter={currentFilter} />
  </div>

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilter: () => {}
}

export default FruitBasket
