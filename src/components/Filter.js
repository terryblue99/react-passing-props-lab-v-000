import React from 'react'

const Filter = (props) => {

  fetch('/api/fruit_types')
    .then(response => response.json())
    .then(filters => props.filters)

  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  )
}

Filter.defaultProps = {
  filters: "all",
  handleChange: "all"
}

export default Filter
