import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const RadioInput = (props) => {
    return (
        <StyledLable>
            <StyledInput
                type='radio'
                name={props.name}
                palceholder={props.palceholder}
            />
            {props.children}
        </StyledLable>
    )
}

const StyledLable = styled.label`
display: block;
padding-bottom: 1rem;
`
const StyledInput = styled.input`
border: none;
outline: none;
`