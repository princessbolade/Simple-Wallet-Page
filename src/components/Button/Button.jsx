import React from 'react'
import './Button.css'

const BUTTON_SIZES =['btn--medium', 'btn--large']
const BUTTON_STYLES =['btn--primary', 'btn--tetiary']


export const Button = ({
    children, 
    buttonStyles,
    buttonSizes,
    onClick
}) => {
    const checkButtonStyles = BUTTON_STYLES.includes(buttonStyles) ? buttonStyles : BUTTON_STYLES[0]
    const checkButtonSizes = BUTTON_SIZES.includes(buttonSizes) ? buttonSizes : BUTTON_SIZES[0]
    return (
      <>
      <button className={`btn ${checkButtonSizes} ${checkButtonStyles}`} onClick={onClick}>
          {children}
      </button>
      </>
    )
}

export default Button
