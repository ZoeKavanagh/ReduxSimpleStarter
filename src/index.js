import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyAyJye2W4Qzu-j6datyFyKJwWGzKBAplWk'

// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this compoent's generated HTML and put it
// on the page in the DOM

ReactDom.render(<App />, document.querySelector('.container'));
