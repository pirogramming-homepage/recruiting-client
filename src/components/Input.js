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
                disabled={props.disabled}
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
                disabled={props.disabled}
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
            maxLength={props.maxLength}
            required={props.required}
            placeholder={props.placeholder}
            onChange={props.onChange}
            disabled={props.disabled}
        />
    )
}

export const CheckBox = (props) => {
    return (
        <StyledLabel>
        <StyledCheckBox
            type="checkbox"
            name={props.name}
            value={props.value}
            checked={props.checked}
            required={props.required}
            onChange={props.onChange}
            disabled={props.disabled}
        />
        {props.children}
        </StyledLabel>
    )
}

export const TextAreaInput = (props) => {
    return (
        <StyledTextArea
	    cols={props.cols}
            rows={10}
            required={props.required}
            maxLength={props.maxLength}
            onChange={props.onChange}
            disabled={props.disabled}
            value={props.value}
        >
        </StyledTextArea>
    )
}

export const FileUpload = (props) => {
    return (
        <Wrapper>
            <FileLabel>
                <StyledFileInput
                    type="file"
                    name={props.name}
                    onChange={props.onChange}
                    disabled={props.disabled}
                />
                파일 업로드
            </FileLabel>
            <InnerWrapper>
                <DestLabel>
                    {props.filename}
                </DestLabel>
                <DestLabel>
                    {props.status}
                </DestLabel>
            </InnerWrapper>
        </Wrapper>
    )
}

const StyledLabel = styled.label`
display: block;
padding-bottom: 1rem;
cursor: pointer;
`
const StyledHorizontalLabel = styled.label`
display: inline;
margin: 0 0.5rem;
cursor: pointer;
@media (max-width: 1300px) {
    padding-bottom: 1rem;
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
border-radius: 0;
outline: none;
width: 100%;
background: none;
font-size: 1rem;
line-height: 1.5rem;
margin-bottom: 1rem;
`
const StyledCheckBox = styled.input`
`
const StyledTextArea = styled.textarea`
border: 1px solid gray;
outline: none;
border-radius: 1.5rem;
font-size: 1rem;
line-height: 1.5rem;
margin: 1rem 0;
padding: 1rem 2rem;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const InnerWrapper = styled.div`
display: flex;
align-items: center;
margin: 0.5rem 0 1.5rem 0;
`
const FileLabel = styled.label`
padding: 1rem 3rem;
text-align: center;
color: ${COLORS.green};
border: 2px solid ${COLORS.green};
border-radius: 1.5rem;
cursor: pointer;
margin: 1rem;
`
const StyledFileInput = styled.input`
position: absolute;
width: 0;
height: 0;
padding: 0;
overflow: hidden;
border: 0;
`
const DestLabel = styled.label`
`
