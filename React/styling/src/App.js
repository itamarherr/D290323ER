import "./App.css";
import BootstrapForm from "./components/BootstrapForm";
import BootstrapPurchaseForm from "./components/BootstrapPurchaseForm";
import ExSolution3 from "./components/ExSolution3";
//import Bootstrap1 from "./components/Bootstrap1";
//import Bootstrap2 from "./components/Bootstrap2";
//import Bootstrap3 from "./components/Bootstrap3";
//import ExSolution2 from "./components/ExSolution2";
import Navigation from "./components/Navigation";
//import ExSolution from "./components/ExSolution";

function App() {
  return (
    <>
      <Navigation />
      {/* <Bootstrap1 /> */}
      {/* <Bootstrap2 /> */}
      {/* <Bootstrap3 /> */}
      {/* <ExSolution /> */}
      {/* <ExSolution2 /> */}
      {/* <BootstrapForm /> */}
      {/* <ExSolution3 /> */}
      <BootstrapPurchaseForm />
    </>
  );
}

export default App;
