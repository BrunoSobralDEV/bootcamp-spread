import { ThemeContext, themes } from '../../Theme';
import IfoddCounter from '../IfoodCounter/IfoddCounter';
import './App.css';

function App() {
  return (
    <ThemeContext.Provider value={themes.primary}>
      <h1>Hello World</h1>
      <IfoddCounter />
    </ThemeContext.Provider>
  );
}

export default App;
