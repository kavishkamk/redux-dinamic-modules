import { Provider } from 'react-redux';
import './App.css';
import Component1 from './components/Component1';
import {newstore} from "./components/newStore";
import {AuthModule} from "./components/features/authModule";
import { DynamicModuleLoader } from 'redux-dynamic-modules';

function App() {
  return (
    <Provider store={newstore}>
      <DynamicModuleLoader modules={[AuthModule]}>
        <div className="App">
          <Component1 />
        </div>
      </DynamicModuleLoader>
    </Provider>
  );
}

export default App;
