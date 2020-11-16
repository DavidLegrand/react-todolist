import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false)

  const modal = showModal ? (
    <Modal>
      <div className="modal">
        <div>Avec un portal, nous pouvons rendre du contenu dans différentes parties du DOM comme s'il s'agissait d'un autre élément React.</div>
        <button onClick={() => setShowModal(false)}>Cacher modal</button>
      </div>
    </Modal>
  ) : null;

  return (
    <div className="app">
      Cette div est en overflow : hidden. La fenêtre modale devrait normalement s'y afficher.
      <button onClick={() => setShowModal(true)}>Afficher modal</button>
      {modal}
    </div>
  );
}

export default App;