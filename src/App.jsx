import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav";
import Navbar from "./components/Navbar";
import PricingOptions from "./components/PricingOptions";

const pricingPromise = fetch("./pricingData.json").then(res => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
