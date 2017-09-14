import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizContainer from './containers/QuizContainer'

import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <div>
    <QuizContainer />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
