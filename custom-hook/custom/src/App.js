import './App.css';
import useFetch from './customHook';

function App() {
  const { isLoading, response, error} = useFetch('https://jsonplaceholder.typicode.com/users');
  // console.log(response);
  // console.log('error->>>', error);
  // console.log('loading->>>', isLoading);  
  return (
    <div className="App">
      {
        error ? <div>Error</div> : <div>Success</div>
      }
      {isLoading ? <div>Loading</div> : <div></div>}
     {
      response.map((item) => {
        return (
          <h1>{item.name}</h1>
        )
      })
     }
    </div>
  );
}

export default App;
