import React from 'react';

import Router from './routes/Router';
import { AppwriteProvider } from './appwrite/AppwriteContext';


function App(): React.JSX.Element {
  return (

    <AppwriteProvider>
      <Router />
    </AppwriteProvider>

  );
}

export default App;
