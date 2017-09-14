import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div>
    App component
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
