import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const RadioInput = (props) => {
    return (
        <StyledLabel>
            <StyledRadioInput
                type='radio'
                name={props.name}
                value={props.value}
                required={props.required}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </StyledLabel>
    )
}

export const RadioHorizontalInput = (props) => {
    return (
        <StyledHorizontalLabel>
            <StyledRadioInput
                type='radio'
                name={props.name}
                value={props.value}
                required={props.required}
                checked={props.checked}
                onChange={props.onChange}
            />
            {props.children}
        </StyledHorizontalLabel>
    )
}

export const TextInput = (props) => {
    return (
        <StyledInput
            type={props.type}
            name={props.name}
            value={props.value}
            required={props.required}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

const StyledLabel = styled.label`
display: block;
padding-bottom: 1rem;
cursor: pointer;
`
const StyledHorizontalLabel = styled.label`
display: block;
padding-bottom: 1rem;
margin: 0 0.5rem;
cursor: pointer;
@media (min-width: 768px) {
    display: inline;
}
`
const StyledRadioInput = styled.input`
border: none;
outline: none;
cursor: pointer;
`
const StyledInput = styled.input`
border: none;
border-bottom: 1px solid black;
outline: none;
width: 100%;
background: none;
font-size: 1rem;
line-height: 1.5rem;
margin-bottom: 1rem;
`