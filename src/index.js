/* eslint-disable prettier/prettier */
import React from 'react'
import styles from './styles.module.css'
import './assets/base.scss'
import { Input, Label } from 'reactstrap'
import { gui } from './utils/gui'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const LabelAndValue = ({ label, value, className }) => {
  return (
    <div className={className || styles.mt2} style={{ color: gui.mainColor }}>
      <span className={styles.fontBold}>{`${label}`}</span>
      <span>{value ? `: ${value}` : ''}</span>
    </div>
  )
}

export const TextField = ({
  type,
  defaultValue,
  label,
  showError,
  name,
  innerRef,
  disabled,
  className,
  onChange,
  min
}) => {
  return (
    <div className={className || styles.mb3}>
      <div className={type === 'textarea' ? styles.textarea : styles.fieldInput}>
        <Input
          name={name}
          min={min || ''}
          disabled={disabled}
          innerRef={innerRef}
          type={type || 'text'}
          className={
            type === 'textarea' ? styles.fieldInputStyle2 : styles.fieldInputStyl
          }
          defaultValue={defaultValue || ''}
          placeholder={`${label} . . . `}
          onChange={onChange}
          rows={type === styles.textarea ? 3 : 1}
        />
        <Label className={styles.labelStyle}>{label}</Label>
      </div>

      {showError && showError(label, name)}
    </div>
  )
}
