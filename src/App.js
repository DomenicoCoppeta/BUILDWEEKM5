import './App.scss';
import Navbar from './components/MyNav';
import MyFooter from './components/MyFooter/MyFooter';
import MyProfile from './components/MyProfile/MyProfile';
import Experiences from './components/Experiences';

function App() {
  return (
    <>
      <Navbar />
      <MyProfile />
      <Experiences />
      <MyFooter/>
    </>
  );
} 

export default App;
