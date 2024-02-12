import './App.css';
import Effect from './components/func/Effect';
import FetchData from './components/func/FetchData';
import HeaderFunc from './components/func/HeaderFunc';

const App = () => {
  return (
    <div className="content">
      {/* <HeaderFunc /> */}
      <Effect />
      <FetchData />
    </div>
  );
};

export default App;
