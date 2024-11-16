import logo from './logo.svg';
import './App.css';
import PageDialogue from './components/PageDialogue';
import { useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [currentTokenAuth, setCurrentTokenAuth] = useState({});

  return (
    <div className="App">
      <PageDialogue currentUser={currentUser} currentTokenAuth={currentTokenAuth} />
    </div>
  );
}

export default App;
