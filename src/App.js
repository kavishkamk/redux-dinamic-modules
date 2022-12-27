import { Provider } from 'react-redux';
import './App.css';
import Component1 from './components/Component1';
// import {stores} from "./components/store";
// import {storess} from "./components/abcstores";
import {newstore} from "./components/newStore";
import {UsersModule} from "./components/features/modulea";
import { DynamicModuleLoader } from 'redux-dynamic-modules';

function App() {
  return (
    <Provider store={newstore}>
      <DynamicModuleLoader modules={[UsersModule]}>
        <div className="App">
          <Component1 />
        </div>
      </DynamicModuleLoader>
    </Provider>
  );
}

export default App;
