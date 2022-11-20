import React, { useCallback, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Feather } from '@expo/vector-icons';

import { GeneralPropsInput, ITextInput } from '@utils/interfaces/interfaceGeneralProps';

import * as Style from './styled';

export default function Input({ 
    name,
    secureTextEntry, 
    placeholder,
    placeholderTextColor, 
    icon,
    icon_eye_opened, 
    icon_eye_closed,
    isVisible, 
    onChangeText, 
    visible,
    ...rest
}: GeneralPropsInput) {

    const inputRef = useRef<ITextInput>(null);

    const { fieldName, registerField, defaultValue = '', error } = useField(name);

    useEffect(() => {
      if (inputRef.current) inputRef.current.value = defaultValue
    }, [defaultValue])

    useEffect(() => {
      registerField<string>({
        name: fieldName,
        ref: inputRef.current,
        getValue() {
          if (inputRef.current) return inputRef.current.value
          return ''
        },
        setValue(ref, value) {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: value })
            inputRef.current.value = value
          }
        },
        clearValue() {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: '' })
            inputRef.current.value = ''
          }
        },
      })
    }, [fieldName, registerField])

    const handleChangeText = useCallback(
      (value: string) => {
        if (inputRef.current) inputRef.current.value = value
        if (onChangeText) onChangeText(value)
      },
      [onChangeText]
    )


    return (
      <>
        <Style.Container {...rest}>
            <Style.Icon  name={icon} size={20} color="#fff"/>
            <Style.TextInput 
                placeholder={placeholder} 
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                ref={inputRef}
                onChangeText={handleChangeText}
                defaultValue={defaultValue}
                {...rest}                
            />
            <Style.Button onPress={visible}>
              <Style.Icon name={isVisible ? icon_eye_opened : icon_eye_closed} size={20} color="#fff"/>
            </Style.Button>
        </Style.Container>
        {error && (
          <Style.ContentRequired>
            <Style.Text>{error}</Style.Text>
            <Feather name="alert-circle" size={20} color="#f00" />
          </Style.ContentRequired>
          )}
      </>
    )
}