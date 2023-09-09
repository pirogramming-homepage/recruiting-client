import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const MainButton = (props) => {
    return (
        <StyledMainButton type={props.type} onClick={props.onClick}>{props.buttonContent}</StyledMainButton>
    )
}

export const ChangePageButton = (props) => {
    return (
        <Wrapper>
            {props.prev
            && <MainButton
                    type="button"
                    onClick={props.onClickPrev}
                    buttonContent={"이전"}
                />
            }
            {props.next
            && <MainButton
                    type="button"
                    onClick={props.onClickNext}
                    buttonContent={"다음"}
                />
            }
            {props.submit
            && <MainButton
                    type="submit"
                    buttonContent={"제출"}
                />
            }
        </Wrapper>
    )
}

const StyledMainButton = styled.button`
padding: 0.5rem 2rem;
color: white;
background: ${COLORS.green};
border-radius: 1rem;
border: none;
text-align: center;
cursor: pointer;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 50%;
`