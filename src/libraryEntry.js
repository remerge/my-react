import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './components/root_component';

function render(domNode, httpService) {
  ReactDOM.render(<RootComponent httpService={httpService} />, domNode);
}

export {
  render
}
