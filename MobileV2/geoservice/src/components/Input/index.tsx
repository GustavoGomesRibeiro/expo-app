import React, { useCallback, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { GeneralProps, ITextInput } from '../../utils/interfaces/interfaceGeneralProps';

import {
    Container,
    TextInput,
    Icon
} from './styled';

export default function Input({ 
    name,
    secureTextEntry, 
    value, 
    onChangeText, 
    placeholder,
    placeholderTextColor, 
    icon, 
    ...rest
}: GeneralProps) {

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
        <Container {...rest}>
            <Icon  name={icon} size={20} color="#fff"/>
            <TextInput 
                placeholder={placeholder} 
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                ref={inputRef}
                onChangeText={handleChangeText}
                defaultValue={defaultValue}
                {...rest}                
            />
        </Container>
    )
}