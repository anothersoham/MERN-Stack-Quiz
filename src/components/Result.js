import React from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';


export default function Result() {

    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)


    /** store user result */
    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Test Your Tenancy Rights</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Name :</span>
                <span className='bold'>{userId || ""}</span>
            </div>
            <div className='flex'>
                <span>Total Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Questions Attempted : </span>
                <span className='bold'>{attempts || 0}/10</span>
            </div>
            <div className='flex'>
                <span>Earned Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
        </div>
            <p></p>
            <p></p>
        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
        <div className="start">
        <Link className='btn' to={'/AnswerSheet'}>Get Right Answers</Link>
        </div>
    </div>
  )
}