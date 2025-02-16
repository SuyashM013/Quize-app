import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import './App.css'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";


function App() {

  const [dark, setDark] = useState(false)

  const darkModeHandler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  // const ans = fetch('https://opentdb.com/api.php?amount=20&category=${9 to 32}&difficulty=${ easy or medium or hard }&type=multiple')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // console.log(ans)



  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} /> 

        </Routes>


        {/* <button onClick={() => darkModeHandler()}>
          {

            dark && <IoIosSunny /> // render sunny when dark is true
          }
          {
            !dark && <FaMoon /> // render moon when dark is false
          }
        </button> */}




      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
