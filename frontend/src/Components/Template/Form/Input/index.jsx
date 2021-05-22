import React from 'react'
import styles from './Input.module.scss'

const Input = ({ label, type, name, value, onChange, error, onBlur, max, disabled = false }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={error ? styles.label__error : styles.label}>{label}:</label>
      <input
        type={type}
        className={error ? styles.input__error : (value === '' ? styles.input : (!disabled ? styles.input__success : styles.input__disabled))}
        id={name}
        name={name}
        maxLength={max}
        onChange={onChange}
        onBlur={onBlur}
        value={value ? value : ""}
        disabled={disabled}
      />
      {error && <p className={styles.msg__error}>{error}</p>}
    </div>
  )
}

export default Input
