// import logo from './logo.svg';
import './App.css';
import { Hello, Bye } from './funciton';
import Ok from './funciton';
import Student from './New';

export default function App() {
  return (
    <div className="App">
      Ashish
      <Hello /> 
      <Bye />
      <Ok />
      <Student />
      {/* How to call functions in react which is returning HTML content */}
      {/* <Topbar /> */}
      {/*  self closing tag */}
    </div>
  );
}
