import { React } from 'react';
import Navbar from '../components/Navbar';
import AllCountires from '../components/AllCountires';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <AllCountires />
      </div>
    </div>
  );
};

export default Home;
