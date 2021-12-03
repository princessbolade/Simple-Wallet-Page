import React from 'react'
import Button from '../Button/Button';

import './AmountBar.css'

function AmountBar() {
    return (
        <>
        <div className='amount__card'>
            <div className="amount__card__icon">
            <i className="fas fa-bolt fa-lg"></i>
            <i className="fas fa-times fa-lg"></i>
            </div>
            <h4 className='amount__card__title'>Wallet Balance</h4>
            <h1 className='amount__card__balance'>$38,000</h1>
            <div className='amount__card__btns'>
           <Button className='btn' buttonSizes='btn--medium' buttonStyles='btn--primary'>Withdraw </Button>
           <Button className='btn' buttonSizes='btn--medium' buttonStyles='btn--tetiary'> Transfer</Button>
           </div>
            </div>
           

        </>
    )
}

export default AmountBar
