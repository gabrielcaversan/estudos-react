import React from 'react';
import Login from './components/login';
import Profile from './components/profile';
import { useAuth } from './providers/auth';

function App() {

  const { user } = useAuth()
  console.log(user);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World!</h1>
        <Profile />
        <Login />
      </header>
    </div>
  );
}

export default App;
