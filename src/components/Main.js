import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Test Your Tenancy Rights</h1>
        <p className='text-paragraph-soham'>In England, more than 4.5 million households live in private rented accommodations. Another 4.0 million reside in social rented apartments.</p>
        <p className='text-paragraph-soham'>Surveys suggest 1 in 3 tenants and 1 in 6 landlords lack the awareness about basic tenancy rights and regulations in force.</p>
        <p className='text-paragraph-soham'> To test your understanding of common rights of tenants in England, enter this quiz.</p> 
        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Your Name (*mandatory)' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Enter</Link>
        </div>
        <p className='text-paragraph-soham-two'>Disclaimer :</p>
        <p className='text-paragraph-soham-two'>This questionnaire provides generic guidance, not a legal advice. Consult professionals for escalating individual issues.</p>
        <p className='text-paragraph-soham-two'>This app collects all your responses for journalistic research. By participating, you agree to share your name and answer data with us.</p>
    </div>
  )
}