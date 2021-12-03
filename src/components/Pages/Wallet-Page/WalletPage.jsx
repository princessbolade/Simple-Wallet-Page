import React from 'react'
import './WalletPage.css'
import NavBar from '../../Nav-bar/NavBar';
import AmountBar from '../../Amount-Bar/AmountBar';
import Transaction from '../../Transcation-History/Transaction';

function WalletPage() {
    return (
        <>
        <div className="wallet-container">
            <NavBar/>
            <AmountBar/>
            <Transaction/>
        </div>
        </>
    )
}

export default WalletPage
