import React from 'react';
import './App.css';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faThumbsDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

// App components
import Banner from './components/Banner';

// Font awesome configuration
library.add(fab, faThumbsUp, faThumbsDown, faWikipediaW, faSearch);

function App() {
  return (
    <div className="row vh-100 vw-100">
		<Banner />
    </div>
  );
}

export default App;
