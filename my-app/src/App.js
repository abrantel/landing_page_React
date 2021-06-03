import MainNavBar from './Components/navBar.js';
import TestingProps from './Components/testingProps.js';
import HeaderImg from './Components/header.js';

function App() {
  return (
    <div>
        <MainNavBar />
        <HeaderImg />
        <TestingProps name="Pedro" />
        <TestingProps name="John" />
        <TestingProps name="Alice" />
    </div>
  );
}

export default App;
