import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const RadioInput = (props) => {
    return (
        <StyledLable>
            <StyledRadioInput
                type='radio'
                name={props.name}
                value={props.value}
                required={props.required}
                onChange={props.onChange}
            />
            {props.children}
        </StyledLable>
    )
}

const StyledLable = styled.label`
display: block;
padding-bottom: 1rem;
`
const StyledRadioInput = styled.input`
border: none;
outline: none;
`