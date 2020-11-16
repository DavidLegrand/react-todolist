import React from 'react';
import Footer from './components/Footer';
import Ticket from './components/Ticket';

function App() {
  return (
    <div className="App">
      <Ticket name={"Super Bowl Tickets"} />
      <Footer></Footer>
    </div>
  );
}

export default App;
