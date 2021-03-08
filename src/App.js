import './App.css';
import RenderData from './components/RenderData';
import RenderError from './components/RenderError';
import RenderLoading from './components/RenderLoading';

function App() {
  return (
    <>
      <RenderData />
      <RenderError />
      <RenderLoading />
    </>
  );
}

export default App;
