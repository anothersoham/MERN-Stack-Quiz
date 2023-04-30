import React from 'react';
import '../styles/AnswerSheet.css'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

/** import actions  */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';


export default function AnswerSheet() {

    const dispatch = useDispatch()
    const {}  = useSelector(state => state)

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <div>
            <div className='allignment-one'>
            <h1 className='text-title'>Know your Tenancy Rights </h1>
            <h2 className='text-title-two'>Answers & Resources</h2>
            </div>
            <div className= 'allignment-two'>
            <h4 className='text-paragraph'>1. In 2023, how many types of residential tenancy agreements are there in the UK?</h4>
            <h6 className='text-paragraph-two'>Answer : Six.</h6>
            <p className='text-paragraph-two'>Those are: Assured Short-hold Tenancy Agreement (AST), Assured Short-hold Tenancy Agreement (Room Only), Excluded Tenancy Agreement (Lodgers Agreement), Company Let Agreement, Non-Assured Tenancy Agreement, Addendum Agreement - Additional Terms.</p> 
            <p><a className='text-paragraph-two' href='https://www.letsbidproperty.co.uk/blog/types-of-tenancy-agreements-uk.html#:~:text=A%20written%20tenancy%20agreement%20is,a%20tenant%20in%20the%20UK.'>Read further here.</a></p>
            <h4 className='text-paragraph'>2. In England, a holding deposit cannot be more than:</h4>
            <p className='text-paragraph-two'>Answer : a week's rent.</p>
            <p className='text-paragraph-two'>As a tenant, you are entitled to get either the refund within seven days of signing your tenancy agreement or can be adjusted with your rent.</p>
            <p><a className='text-paragraph-two' href='https://www.bbc.co.uk/news/technology-65038459'>Read further here.</a></p>
            <p className='text-paragraph'>3. In England, if you pay for the holding deposit but fail to sign an agreement by the deadline, you are entitled for a refund within:</p>
            <p className='text-paragraph-two'>Answer : Zero days. </p>
            <p className='text-paragraph-two'>If you decide not to go with an agreement without a good reason or fail to inform by the deadline, the landlord can hold the security deposit. There is no cooling off period with tenancy agreements.</p>
            <p><a className='text-paragraph-two' href='https://england.shelter.org.uk/housing_advice/tenancy_deposits/holding_deposits/when_you_pay_a_holding_deposit#:~:text=You%20should%20normally%20get%20your,not%20happy%20with%20your%20references'>Read further here.</a></p>
            <h5 className='text-paragraph'>4. If you want to adopt a pet in your assured shorthold tenancy (AST) flat, can your landlord demand extra housing rent for that? </h5>
            <p className='text-paragraph-two'>Answer : Yes.</p>
            <p className='text-paragraph-two'>Though the Tenant Fees Act, 2019 bans demanding additional security deposit for letting with pets, there is no obligations on charging more rent for the reason.</p>
            <p><a className='text-paragraph-two' href='https://www.standard.co.uk/homesandproperty/renting/london-renters-tenants-can-own-pet-b1006357.html'>Read further here.</a></p>
            <h4 className='text-paragraph'>5. Although if you live in a hostel, dormitory, or hall of residence, but still, can avail protection from eviction as a tenant if:</h4>
            <p className='text-paragraph-two'>Answer : All of the above. </p>
            <p className='text-paragraph-two'>You can avail rights of a tenant if: you have an agreement for a specific room, the owner does not live in the same building, you have a lock on the door, etc.</p>
            <p><a className='text-paragraph-two' href='https://england.shelter.org.uk/housing_advice/private_renting/types_of_renting_agreement'>Read further here.</a></p>
            <h4 className='text-paragraph'>6. Are you legally bound to pay for a professional deep cleaning at the end of your tenancy?</h4>
            <p className='text-paragraph-two'>Answer : No.</p>
            <p className='text-paragraph-two'>Since June 01, 2020, tenants are not liable to cover a standard cleaning service at the end of their tenancy. But the ethical choice is always to return in the condition with fair wear and tear.</p>
            <p><a className='text-paragraph-two' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/922900/Tenant_Fees_Act_-_Tenant_Guidance.pdf'>Read further here.</a></p>
            <h4 className='text-paragraph'>7. Suppose as a student, you want to end your fixed term tenancy contract because of discontinuing your study in the nearby college.  The landlord has denied agreeing but as you moved out, they welcomed in a new tenant. In this situation, they can legally sue you:</h4>
            <p className='text-paragraph-two'>Answer : Never. </p>
            <p className='text-paragraph-two'>Your tenancy ends automatically when a new tenant moves in.</p>
            <p><a className='text-paragraph-two' href='https://england.shelter.org.uk/housing_advice/private_renting/how_to_end_a_tenancy_before_you_move_in'>Read further here.</a></p>
            <h4 className='text-paragraph'>8. Imagine you are living in a property since last year. Now you are keen to extend the contract. But the landlord asks for a fee of £350 for the renewal of the license. You are required to pay:</h4>
            <p className='text-paragraph-two'>Answer : Nothing</p>
            <p className='text-paragraph-two'>Administrative charges are one of the banned charges under Tenant Fees Act, 2019.</p>
            <p><a className='text-paragraph-two' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/922900/Tenant_Fees_Act_-_Tenant_Guidance.pdf'>Read further here.</a></p>
            <h4 className='text-paragraph'>9. Assume you left your flat for a winter vacation and have forgotten to shut down the main water supply. As the temperature plummeted under 0°C, the pipeline burst.  Now, are you liable to cover the repairing cost?</h4>
            <p className='text-paragraph-two'>Answer : Yes, but only the amount stated on the invoice. </p>
            <p className='text-paragraph-two'>Under the British law, you are entitled to take good care of the property and bear the cost for repairing if any damage has been caused by you or due to your negligence.</p>
            <p><a className='text-paragraph-two' href='https://www.gov.uk/private-renting#:~:text=As%20a%20tenant%2C%20you%20have,challenge%20excessively%20high%20charges'>Read further here.</a></p>
            <h4 className='text-paragraph'>10.	If you have been served a valid Section 21 (No Fault) eviction notice, you can still stay at your accommodation for minimum:</h4>
            <p className='text-paragraph-two'>Answer : Two months.</p>
            <p className='text-paragraph-two'>The land’s law allows you to stay at least two more months in your rented flat from the day the notice has been served.</p>
            </div>
            <p><a className='text-paragraph-bottom' href="https://www.gov.uk/evicting-tenants/section-21-and-section-8-notices#:~:text=In%20England%2C%20a%20Section%2021,a%20'contractual'%20periodic%20tenancy.">Read further here.</a></p>
            <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Return to Homepage</Link>
        </div>
        </div>
    )
}