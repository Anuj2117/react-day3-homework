import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
      <div className="mainwrapper">
         <Header/>
         <Hero/>
         <hr style={{margin:"20px"}}/>
         <Footer/>
      </div>
    </>
  )
}

export default App
