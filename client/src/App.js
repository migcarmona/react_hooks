import logo from './logo.svg';
import Count from './components/UseState/Counter';
import Counter2 from './components/UseState/Counter2';
import Counter from './components/UseState/Counter3';
import HookStateArray from './components/UseState/HookStateArray';
import ExplainEffects from './components/UseEffect/ExplainEffects';
import EffectExample1 from './components/UseEffect/EffectExample1';
import EffectExample2 from './components/UseEffect/EffectExample2';
import EffectExample3 from './components/UseEffect/EffectExample3';
import MouseContainer from './components/UseEffect/MouseContainer';
import FetchMultiplePosts from './components/DataFetching/FetchMultiplePosts';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Count/> */}
    {/* <Counter2/> */}
    {/* <Counter3/>
    <HookStateArray/> */}
   {/*  <EffectExample1/> */}
   {/*  <EffectExample2/> */}
   {/* <EffectExample3/> */}
   {/* <MouseContainer/> */}
  <FetchMultiplePosts/>
    </div>
  );
}

export default App;
