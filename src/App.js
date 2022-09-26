//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/Homepage/Homepage';
import Navb from './Components/Navb/Navb';
import Footer from './Components/Footer/Footer';
import Artboard from './Components/Artboard/Artboard';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
   <>
    <Navb />
   <Homepage/>
   <Artboard/>
   <Welcome />
   <Footer />
   
   </>
  );
}

export default App;
