import React from 'react';

function Sorting({ onSelect }) {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };

  return (
    <select onChange={selectHandler} className="p-3 border outline-none">
      <option>Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Sorting;
