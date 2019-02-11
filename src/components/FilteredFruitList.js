import React from 'react'

const FilteredFruitList = (props) => { 
 
  const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter)

  fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => props.fruit)
  
  return (
    
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
}      

FilteredFruitList.defaultProps = {
  fruit: "all",
  filter: "all"
}

export default FilteredFruitList
