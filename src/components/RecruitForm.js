import { React, useEffect, useState } from 'react'
import styled from 'styled-components'
import { COLORS, LEVEL, SERVER_URL } from './Variables'
import { PiroHeader } from './PiroHeader'
import { ChangePageButton } from './Button'
import { RecruitFirstPage } from './RecruitFirstPage'
import { RecruitSecondPage } from './RecruitSecondPage'

const handleSubmit = async(e) => {
    e.preventDefault();
    const body = {};
    body.attend = e.target.attend.value;
    body.workshop = e.target.workshop.value;
    body.personal_info = e.target.personal_info.value;
    body.deposit = e.target.deposit.value;
    await fetch(`${SERVER_URL}/recruit/save_form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
}

export const RecruitForm = (props) => {
    const [index, setIndex] = useState(0)
    const [attend, setAttend] = useState('')
    const [workshop, setWorkshop] = useState('')
    const [personal_info, setPersonal_info] = useState('')
    const [deposit, setDeposit] = useState('')

    const [name, setName] = useState('')
    const [university, setUniversity] = useState('')
    const [major, setMajor] = useState('')
    const [minor, setMinor] = useState('')
    const [course, setCourse] = useState('')
    const [level, setLevel] = useState('')

    const handleChange = (name, value) => {
        switch(name) {
            case 'attend':
                setAttend(value)
                break
            case 'workshop':
                setWorkshop(value)
                break
            case 'personal_info':
                setPersonal_info(value)
                break
            case 'deposit':
                setDeposit(value)
                break
        }
    }
    const onInfoChange = (name, value) => {
        switch(name) {
            case 'name':
                setName(value)
                break
            case 'university':
                setUniversity(value)
                break
            case 'major':
                setMajor(value)
                break
            case 'minor':
                setMinor(value)
                break
            case 'course':
                setCourse(value)
                break
            case 'level':
                setLevel(value)
                break
        }
    }

    return (
        <StyledRecruitForm onSubmit={handleSubmit}>
            <PiroHeader>{`${LEVEL}기 지원서`}</PiroHeader>
            { index === 0
            && <>
            <RecruitFirstPage
                attend={attend} workshop={workshop} personal_info={personal_info} deposit={deposit}
                handleChange={handleChange}
            />
            <ChangePageButton
                prev={false} next={true}
                onClickNext={() => setIndex(index + 1)}
            />
            </>
            }
            { index === 1
            && <>
            <RecruitSecondPage
                name={name} university={university} major={major}
                minor={minor} course={course} level={level}
                onInfoChange={onInfoChange}
            />
            <ChangePageButton
                prev={true} next={true}
                onClickPrev={() => setIndex(index - 1)}
                onClickNext={() => setIndex(index + 1)}
            />
            </>
            }
        </StyledRecruitForm>
    )
}

const StyledRecruitForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem 0;
`