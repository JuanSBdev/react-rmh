import React from 'react'
import SearchBar from './SearchBar.jsx';
export default function Nav(props) {
  return (
    <div>
        <SearchBar  onSearch={props.onSearch} />

    </div>
  )
}
