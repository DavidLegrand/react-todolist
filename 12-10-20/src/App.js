import React from 'react';
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import './App.css';
import Main from './components/Main';
import ContactForm from './components/ContactForm';
import { UserIdProvider } from './contexts/UserId'
import { PersistGate } from 'redux-persist/integration/react'

function App() {


  return (
    <div className="App">
      <ContactForm contact={{ name: 'John Doe' }} updateContact={console.log} />

      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UserIdProvider>
            <Main></Main>
          </UserIdProvider>
        </PersistGate>

      </Provider> */}
    </div>
  );
}

export default App;