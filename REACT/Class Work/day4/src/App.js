import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/ChildComponent';
import ChildClass from './components/ChildClass';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import ConditionalRendering from './components/ConditionalRendering';
import TernaryCondition from './components/TernaryCondition';
import AndCondition from './components/AndCondition';
function App() {
  const mgs="Hi from parent component-app";
  const mgs1="Hi from parent component class";
  return (
    <div className="App">

      <ChildComponent message={mgs}/>
      <ChildClass message={mgs1}/>
      <Counter/>
      <CounterClass/>
      <ConditionalRendering/>
      <TernaryCondition/>
      <AndCondition/>
    </div>
  );
}

export default App;
