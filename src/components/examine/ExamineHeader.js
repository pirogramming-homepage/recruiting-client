import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExamineHeader = (props) => {
    return (
    <StyledContainer style={{backgroundColor: 'white'}}>
        <RelativeContainer>
            <StyledLink to="/examine">
                <StyledLogoText>PIROGRAMMING</StyledLogoText>
                <StyledTitleText>지원서 검토 시스템</StyledTitleText>
            </StyledLink>

            <StyledUserInfoText>접속자 | {props.name}님</StyledUserInfoText>
        </RelativeContainer>
    </StyledContainer>
    )
}

const StyledContainer = styled.div`
padding: 1rem 0 0.5rem 0;
position: fixed;
top: 0;
right: 0;
left: 0;
`
const RelativeContainer = styled.div`
position: relative;
`
const StyledLink = styled(Link)`
color: black;
text-decoration: none;
cursor: pointer;
`
const StyledLogoText = styled.h2`
display: block;
text-align: center;
font-size: 1.5rem;
letter-spacing: 0.2rem;
font-weight: bold;
`
const StyledTitleText = styled.h3`
display: block;
text-align: center;
font-size: 1rem;
`
const StyledUserInfoText = styled.p`
display: inline;
position: absolute;
top: 0.5rem;
right: 10rem;
font-size: 0.8rem;
cursor: pointer;
text-align: center;
color: black;
&:hover {
    color: lightgray;
}
@media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    display: block;
}
`