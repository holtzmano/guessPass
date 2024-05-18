import React from 'react';
import Input from './components/Input';
import Header from './components/Header';
import Page from './components/Page';
import DifficultyLevel from './components/DifficultyLevel';

function App() {
  const [difficulty, setDifficulty] = React.useState(null);
  const [password, setPassword] = React.useState('');

  const onSelectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const onBackClick = () => {
    setDifficulty(null);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    // Logic to handle password after submission can go here
    if (event) event.preventDefault();
    console.log("Password submitted:", password);
    alert("Password submitted: " + password);
  };

  return (
    <Page>
      <Header />
      <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white' }}>
        <p>Your Password: </p>{password}
      </div>
      {difficulty ? (
        <div>
          <h2>Selected Difficulty: {difficulty}</h2>
          <button onClick={onBackClick}>Back</button>
        </div>
      ) : (
        <DifficultyLevel onSelectDifficulty={onSelectDifficulty} />
      )}
      <Input
        value={password}
        onChange={handlePasswordChange}
        onSubmit={handlePasswordSubmit}
      />
    </Page>
  );
}

export default App;
