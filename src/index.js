import React from 'react';
import { render } from 'react-dom';

import InfDemo from './InfDemo';

// inf
import inf from './inf';
window.inf = inf;

render(
  <InfDemo />,
  document.getElementById('root')
);
