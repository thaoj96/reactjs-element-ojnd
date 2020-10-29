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
    <div className={className || 'mt-2'} style={{ color: gui.mainColor }}>
      <span className='font-b'>{`${label}`}</span>
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
    <div className={className || 'mb-3'}>
      <div className={type === 'textarea' ? 'textarea' : 'fieldInput'}>
        <Input
          name={name}
          min={min || ''}
          disabled={disabled}
          innerRef={innerRef}
          type={type || 'text'}
          className={
            type === 'textarea' ? 'fieldInputStyle2' : 'fieldInputStyle'
          }
          defaultValue={defaultValue || ''}
          placeholder={`${label} . . . `}
          onChange={onChange}
          rows={type === 'textarea' ? 3 : 1}
        />
        <Label className='labelStyle'>{label}</Label>
      </div>

      {showError && showError(label, name)}
    </div>
  )
}
