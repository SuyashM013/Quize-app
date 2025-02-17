import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
// import Trying from "./components/Trying"


function App() {

  const [dark, setDark] = useState(false)
  const [name, setName] = useState("")
  const [question, setQuestion] = useState()
  const [score, setScore] = useState(0)

  const darkModeHandler = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestion(data.results);
    console.log(data.results) //-------------------------
  };

  // const trythis = async () => {
  //   const {data} = await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')

  //   console.log(data.results)
  // }

  useEffect(() => {
    //  trythis(),
    //  fetchQuestions()

  }, [])


  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <Routes>

          <Route path="/"
            element={<Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions} />} />
          <Route path="/quiz"
            element={<Quiz
              name={name}
              question={question}
              score={score}
              setScore={setScore}
              setQuestion={setQuestion} />} />
          <Route path="/result" element={<Result name={name} score={score} />} />


        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
