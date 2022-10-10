import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Artboard from "./Components/Artboard/Artboard";
import Welcome from "./Components/Welcome/Welcome";
import Redefining from "./Components/Redefining/Redefining";
import Scope from "./Components/Scope/Scope";
import Smart from "./Components/Smart/Smart";
import Discover from "./Components/Discover/Discover";
import Categories from "./Components/Categories/Categories";

function Load() {
  return (
    <>
      <Homepage />
      <Artboard />
      <Categories />
      <Welcome />
      <Redefining />
      <Smart />
      <Scope />
      <Discover />
      <Footer />
    </>
  );
}

export default Load;
