import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'

import ErrorMessage from '../ErrorMessage';
import { useNavigate } from 'react-router-dom'

function Quiz({ name, score, question, setQuestion, setScore }) {

  const [options, setOptions] = useState();
  const [currques, setCurrques] = useState(0);

  const [selected, setSelected] = useState()
  const [error, setError] = useState(false)

  const navigate = useNavigate()



  useEffect(() => {
    // console.log(question)

    setOptions(question && handleShuffle([
      question[currques]?.correct_answer,
      ...question[currques]?.incorrect_answers,]));
  }, [currques, question])

  // console.log(options)

  const handleShuffle = (options) => {

    return options.sort(() => Math.random() - 0.5);

  }

  const handleselect = (i) => {
    if (selected === i && selected === question[currques]?.correct_answer) {
      return "select";
    }
    else if (selected === i && selected !== question[currques]?.correct_answer) {
      return "wrong";
    }
    else if (i === question[currques]?.correct_answer) {
      return "select";

    }

  }

  const handleCheck = (i) => {
    setSelected(i);
    if (i === question[currques]?.correct_answer) setScore(score + 1);
    setError(false);
  }

  const handleNext = () => {
    if (currques > 8) {
      console.log("quiz over")
      navigate("/result")
    }
    else if (selected){
      setCurrques(currques + 1);
      setSelected()
    }
    else{
      setError("Please select an option first")
    }

  }

  const handleQuit = () => {

  }

  return (
    <div>
      <h1 className='text-5xl exo-2-font text-center mt-5  border-black py-1 w-auto  rounded-lg'>Welcome {name}</h1>

      {question ? (
        <div className='flex flex-col items-center'>

          <div className='flex justify-between w-11/12 mt-5'>
            <span className='bg-gray-300 py-1 px-2 rounded-md uppercase ' >{question[currques].category}</span>
            <span className='bg-gray-300 py-1 px-2 rounded-md uppercase '>Score : {score}</span>
          </div>

          <div className=' w-11/12 mt-5 rounded-lg'>


            <div>
              <h2 className='text-4xl text-center m-5'>Question {currques + 1} </h2>

              <div className='border-4 border-black m-3 backdrop-blur-sm'>

                <h3 className='text-xl p-5'> {question[currques].question}</h3>

                <div className='flex flex-col md:flex-row justify-evenly lg:flex-col gap-3 w-[80%] m-auto'>
                  {error && <ErrorMessage />}
                  {
                    options && options.map((i) => (
                      <button
                        className={`py-1 px-2  uppercase m-2 border-2 border-black  singleOption  ${selected && handleselect(i)}`}
                        onClick={() => { handleCheck(i) }}
                        key={i}
                        disabled={selected}
                      >{i}</button>
                    ))}

                </div>

                <div className='flex gap-10 justify-around  mt-10 mb-5 w-[80%] lg:w-1/2 m-auto '>

                  <Button fullWidth variant='contained' color='secondary' className='m-5' onClick={handleQuit} href='/'> QUIT</Button>

                  <Button fullWidth variant='contained' color='primary' className='m-5' onClick={handleNext} > NEXT QUESTION</Button>
                </div>




              </div>
            </div>


          

          </div>


        </div>
      ) : (
        <div className='flex justify-center items-center h-96 '>


          <CircularProgress color='inherit' size={200} thickness={1} className='m-auto' />

        </div>

      )}

    </div>
  )
}

export default Quiz