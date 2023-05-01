import Img from '../assets/tezos.jpg';


export default function Home() {

    return (
      <>
        <div className="h-screen w-screen flex align-center justify-center static mt-15">
            <div className= "h-full w-screen flex justify-center items-center bg-center bg-cover bg-no-repeat static top-0" style={{ backgroundImage: `url(${Img})`}}>
              <div  className= "bg-slate-50 opacity-80 rounded-md p-10">
                <h1 className="text-slate-900 text-5xl font-bold"> Welcome to CoinPredict. </h1>
                <p className="text-slate-900 text-lg font-semibold">Click on the menu to view our daily crypto price forecasts</p>
              </div>
            </div>
        </div>
      </>
    )
  }