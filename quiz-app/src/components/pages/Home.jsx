import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import back1 from '../../assets/quiz.svg'
// import { TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Categories from '../Category';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'

import ErrorMessage from '../ErrorMessage';

function Home({ name, setName, fetchQuestions }) {


    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }
        else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quiz");
        }
    }


    return (
        <div className=' p-2 text-center'>
            {/* <Link to='/'></Link> */}

            <div className='montserrat-font flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-around  lg:items-center'>

                <img src={back1} alt='quiz-img' className='w-3/4 h-3/4 lg:w-1/2 mt-10' />

                <div className=' w-full flex flex-col items-center gap-10  montserrat-font' >

                    <h3 className='text-2xl lg:text-3xl mt-10'>Quiz Settings</h3>
                    
                    {error  && <ErrorMessage />}

                    <div className='flex flex-col items-center justify-center gap-5 w-1/2 md:w-full text-center'>

                    <TextField
                        className='w-full md:w-1/2 backdrop-blur-md  mb-5'
                        label="Enter Your Name"
                        variant="outlined"
                        // value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        select
                        className=' w-full md:w-1/2 backdrop-blur-md mb-5'
                        label="Select Category"
                        defaultValue="EUR"
                        helperText="Please select quiz category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >{
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>

                    <TextField
                        select
                        className=' w-full md:w-1/2 backdrop-blur-md '
                        label="Select Difficulty"
                        defaultValue="EUR"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}

                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>

                    <Button onClick={handleSubmit} className='w-full md:w-1/2  hover:bg-gray-300 text-white' color='inherit' variant="contained">Start Quiz</Button>


                    </div>


                </div>

            </div>



        </div>
    )
}

export default Home