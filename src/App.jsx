import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
