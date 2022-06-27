import "./App.css";
import { Modals } from './practice/card';
// import Tables from './practice/toggle';
import NavbarComponent from './components/navbar'
import DataTable from './components/mui_table';
import BasicList from './practice/list_mui';

function App() {
  return (
    <div className="App">
    <input type="text" />
    <button type='button'>Click</button>
      <NavbarComponent />
      <Modals />
      <DataTable />
      {/* <Tables /> */}
      <BasicList />
    </div>
  );
}

export default App;
