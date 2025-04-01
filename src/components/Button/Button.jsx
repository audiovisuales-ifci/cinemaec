import React from 'react'
import styles from './Button.module.css'

const Button = ({
  label,
  onClick,
  btnStyle = 'primary',
}) => {
  const buttonClass =
    btnStyle === 'primary'
      ? styles.button__primary
      : styles.button__secondary

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
