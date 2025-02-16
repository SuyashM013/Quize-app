import React from 'react'
import { Link } from 'react-router-dom'
import back1 from '../../assets/quiz.svg'
// import { TextField } from '@material-ui/core'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Categories from '../Category';
import { MenuItem } from '@mui/material';

function Home() {
    return (
        <div className=' p-2 text-center'>
            {/* <Link to='/'></Link> */}

            <div className='montserrat-font flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-around  lg:items-center'>

                <img src={back1} alt='quiz-img' className='w-3/4 h-3/4 lg:w-1/2 mt-10' />

                <div className=' w-full flex flex-col items-center gap-10 font-bold montserrat-font' >

                    <h3 className='text-2xl lg:text-3xl mt-10'>Quiz Settings</h3>

                    <TextField
                    className='w-full md:w-1/2 backdrop-blur-md '
                    label="Enter Your Name"
                    variant="outlined" />

                <TextField
                    select
                    className=' w-full md:w-1/2 backdrop-blur-md '
                    label="Select Category"
                    defaultValue="EUR"
                    helperText="Please select quiz category"
                >{
                        Categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.category}
                            </MenuItem>
                        ))
                    }
                </TextField>

                <TextField
                    select
                    className=' w-full md:w-1/2 backdrop-blur-md '
                    label="Select Difficulty"
                    defaultValue="EUR"

                >
                    <MenuItem key="Easy" value="Easy">Easy</MenuItem>
                    <MenuItem key="Medium" value="Medium">Medium</MenuItem>
                    <MenuItem key="Hard" value="Hard">Hard</MenuItem>
                </TextField>

                <Button className='w-full md:w-1/2  hover:bg-gray-300 text-white' color='inherit' variant="contained">Submit</Button>

                </div>



            </div>


            <div className='p-5 bg-lime-10 flex flex-col items-center gap-10 font-bold' >


                

            </div>

        </div>
    )
}

export default Home