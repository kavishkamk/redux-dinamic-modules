import { Provider } from 'react-redux';
import './App.css';
import Component1 from './components/Component1';
import {stores} from "./components/store";
// import {storess} from "./components/stores";

function App() {
  return (
    <Provider store={stores}>
        <div className="App">
          <Component1 />
        </div>
    </Provider>
  );
}

export default App;
