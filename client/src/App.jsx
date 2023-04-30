import { BrowserRouter, Routes, Route } from "react-router-dom";

import CryptoChart from "./comps/coin.jsx"
import Nav from "./comps/nav.jsx"
import Home from "./comps/home.jsx";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="https://coin-forecast.onrender.com/" element={<Nav/>}>
            <Route index element={<Home/>}/>
          <Route path="https://coin-forecast.onrender.com/btc" element={<CryptoChart dataUrl="https://coinpredict.onrender.com/btc" crypto="Bitcoin"/>} />
          <Route path="https://coin-forecast.onrender.com/bnb" element={<CryptoChart dataUrl="https://coinpredict.onrender.com//bnb" crypto="Binance coin"/>} />
          <Route path="https://coin-forecast.onrender.com/eth" element={<CryptoChart dataUrl="https://coinpredict.onrender.com//eth" crypto="Ethereum"/>}/>
          <Route path="https://coin-forecast.onrender.com/sol" element={<CryptoChart dataUrl="https://coinpredict.onrender.com//sol" crypto="Solana"/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
      
    )
}

 {/* <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>}/> */}
          // </Route>