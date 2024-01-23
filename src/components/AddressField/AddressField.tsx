import React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import { InputOnChangeData } from 'semantic-ui-react/dist/commonjs/elements/Input'
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup'
import { Field } from '../Field/Field'
import { shorten, isValid } from './utils'
import { Props } from './AddressField.types'
import './AddressField.css'

export default function AddressField(props: Props) {
  const {
    className,
    fieldClassName,
    i18n,
    resolveName,
    onChange,
    ...otherProps
  } = props
  const [inputValue, setInputValue] = useState('')
  const [address, setAddress] = useState('')
  const timeout = useRef<NodeJS.Timeout>()
  const [valid, setValid] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    if (props.value && props.value !== address) {
      setInputValue(props.value)
    }
  }, [props.value, address])

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const handleChange = useCallback(
    (evt, data: InputOnChangeData) => {
      setInputValue(data.value)
      setValid(undefined)
      setAddress('')
      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      timeout.current = setTimeout(async () => {
        if (isValid(data.value)) {
          setValid(true)
          if (onChange) {
            onChange(evt, data)
          }
          return
        }

        setLoading(true)
        try {
          const resolvedAddress = await resolveName(data.value)
          if (resolvedAddress) {
            setValid(true)
            setAddress(resolvedAddress)
            if (onChange) {
              onChange(evt, { value: resolvedAddress })
            }
          } else {
            setValid(false)
          }
        } catch (e) {
          console.error('Error resolving address', e)
          setValid(false)
        }
        setLoading(false)
      }, 800)
    },
    [onChange]
  )

  const additionalProps = valid
    ? {
        icon: (
          <Icon
            color="green"
            data-testid="check-icon"
            size="large"
            name="check circle"
          />
        )
      }
    : {}

  return (
    <div className={classNames('dui-address-field', className)}>
      {address && (
        <Popup
          position="top center"
          className="dui-address-field__address-popup"
          on="hover"
          content={address}
          trigger={
            <span
              data-testid="resolved-address"
              className="dui-address-field__address"
            >
              {shorten(address)}
            </span>
          }
        />
      )}
      <Field
        {...otherProps}
        type="text"
        placeholder={props.placeholder ?? 'Address or name'}
        value={inputValue || ''}
        message={
          valid === false
            ? i18n?.errorMessage || 'This is not a valid name or address'
            : undefined
        }
        error={valid === false}
        loading={loading}
        disabled={loading}
        input={{ autoComplete: 'off', name: 'address', id: 'address' }}
        onChange={handleChange}
        className={classNames(fieldClassName, {
          'dui-address-field__input--with-address': !!address
        })}
        {...additionalProps}
      ></Field>
    </div>
  )
}