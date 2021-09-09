import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-lis';
import { TsReactTest } from 'try-use-array';
import { LoginScreen } from 'screens/login';

function App() {
  return (
    <div className="App">
      <LoginScreen/>
      {/* <ProjectListScreen/> */}
    </div>
  );
}

export default App;
