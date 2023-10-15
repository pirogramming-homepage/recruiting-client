import { React, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { COLORS, LEVEL, SERVER_URL } from '../Variables'
import { PiroHeader } from '../PiroHeader'
import { ChangePageButton } from '../Button'
import { RecruitFirstPage } from './RecruitFirstPage'
import { RecruitSecondPage } from './RecruitSecondPage'
import { RecruitThirdPage } from './RecruitThirdPage'
import { RecruitLastPage } from './RecruitLastPage'
import { Loading } from '../Loading'

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
export const RecruitForm = (props) => {
    useEffect(() => {
        scrollTop()
    }, [])

    const [index, setIndex] = useState(0)
    const [attend, setAttend] = useState('')
    const [workshop, setWorkshop] = useState('')
    const [personal_info, setPersonal_info] = useState('')
    const [deposit, setDeposit] = useState('')

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [university, setUniversity] = useState('')
    const [major, setMajor] = useState('')
    const [minor, setMinor] = useState('')
    const [course, setCourse] = useState('')
    const [level, setLevel] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [interview, setInterview] = useState(new Set())

    
    const [q1_introduce, setIntroduce] = useState('')
    const [q2_experience, setExperience] = useState('')
    const [q3_idea, setIdea] = useState('')
    const [q4_performance, setPerformance] = useState('')
    const [q5_patience,  setPatience] = useState('')
    const [q6_plan, setPlan] = useState('')

    const [filename, setFilename] = useState('')
    const [status, setStatus] = useState('')
    const [doyouknowpiro, setDoyouknowpiro] = useState('')
    const [doyouknowValue, setDoyouknowValue] = useState('')

    const [loading, setLoading] = useState(false)

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
            case 'email':
                setEmail(value)
                break
            case 'name':
                setName(value)
                break
            case 'gender':
                setGender(value)
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
            case 'address':
                setAddress(value)
                break
            case 'phone':
                setPhone(value)
                break
            case 'interview':
                setInterview(value)
                break
        }
    }
    const handleCheck = (value, isChecked) => {
        if(isChecked) {
            interview.add(value)
            setInterview(interview)
        } else if(!isChecked && interview.has(value)) {
            interview.delete(value)
            setInterview(interview)
        }
    }
    const handleDoYouKnow = (value) => {
        setDoyouknowpiro(value);
    }

    // navigate는 react function 위치에
    // handleSubmit 안에 있으면 오류?
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(filename === '' || doyouknowpiro === '') {
            window.alert('입력하지 않은 항목이 있습니다.')
        } else {
            if(window.confirm('제출하시겠습니까? 정보를 정확하게 기입했는지 다시 한 번 확인해 주세요.')) {
                setLoading(true)
                setIndex(index + 1)
                const body = {
                    attend: attend,
                    workshop: workshop,
                    personal_info: personal_info,
                    deposit: deposit,

                    email: email,
                    name: name,
                    gender: gender,
                    university: university,
                    major: major,
                    minor: minor,
                    course: course,
                    level: level,
                    address: address,
                    phone: phone,
                    interview: Array.from(interview),

                    q1_introduce: q1_introduce,
                    q2_experience: q2_experience,
                    q3_idea: q3_idea,
                    q4_performance: q4_performance,
                    q5_patience: q5_patience,
                    q6_plan: q6_plan,

                    coding_test_fileDest: filename,
                    doyouknowpiro: doyouknowpiro !== 'etc' ? doyouknowpiro : doyouknowValue,
                    piro_level: LEVEL,
                }
                // 데이터 저장
                await fetch(`${SERVER_URL}/recruit/save_form`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                })
                // 사본 이메일 전송
                const result = await fetch(`${SERVER_URL}/recruit/send_mail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                })
                if(result.status == false) {
                    navigate("/fail")
                }
                navigate("/success", { state: {emailAddress: email} })
            }
        }
    }

    // 비어 있는 폼 확인
    const checkFirstForm = () => {
        if(attend === '' || attend === 'false'
        || workshop === '' || workshop === 'false'
        || personal_info === '' || personal_info === 'false'
        || deposit === '' || deposit === 'false') {
            window.alert('입력하지 않았거나 동의하지 않은 항목이 있습니다.')
        } else {
            scrollTop()
            setIndex(index + 1)
        }
        // setIndex(index + 1)
    }
    const checkSecondForm = () => {
        if(name === '' || gender === '' || university === '' || major === ''
        || level === '' || address === '' || phone === '') {
            window.alert('입력하지 않은 항목이 있습니다.')
        } else {
            scrollTop()
            setIndex(index + 1)
        }
        // setIndex(index + 1)
    }
    const checkThirdForm = () => {
        if(q1_introduce === '' || q2_experience === '' || q3_idea === ''
        || q4_performance === '' || q5_patience === '' || q6_plan === '') {
            window.alert('입력하지 않은 항목이 있습니다.')
        } else {
            scrollTop()
            setIndex(index + 1)
        }
        // setIndex(index + 1)
    }

    return (
        <StyledRecruitForm onSubmit={handleSubmit} encType="multipart/form-data">
            <PiroHeader>{`${LEVEL}기 지원서`}</PiroHeader>
            { index === 0
            && <>
            <RecruitFirstPage
                attend={attend} workshop={workshop} personal_info={personal_info} deposit={deposit}
                handleChange={handleChange}
            />
            <ChangePageButton
                prev={false} next={true} submit={false}
                onClickNext={checkFirstForm}
            />
            </>
            }
            { index === 1
            && <>
            <RecruitSecondPage
                email={email} name={name} gender={gender} university={university} major={major} minor={minor}
                course={course} level={level} address={address} phone={phone} interview={interview}
                onInfoChange={onInfoChange}
                onCheckChange={handleCheck}
            />
            <ChangePageButton
                prev={true} next={true} submit={false}
                onClickPrev={() => setIndex(index - 1)}
                onClickNext={checkSecondForm}
            />
            </>
            }
            { index === 2
            && <>
            <RecruitThirdPage
                q1_introduce={q1_introduce} q2_experience={q2_experience} q3_idea={q3_idea}
                q4_performance={q4_performance} q5_patience={q5_patience} q6_plan={q6_plan}
                setIntroduce={setIntroduce} setExperience={setExperience} setIdea={setIdea}
                setPerformance={setPerformance} setPatience={setPatience} setPlan={setPlan}
            />
            <ChangePageButton
                prev={true} next={true} submit={false}
                onClickPrev={() => setIndex(index - 1)}
                onClickNext={checkThirdForm}
            />
            </>
            }
            { index === 3
            && <>
            <RecruitLastPage
                name={name} doyouknowpiro={doyouknowpiro} filename={filename} status={status}
                doyouknowValue={doyouknowValue}
                setFilename={setFilename}
                setStatus={setStatus}
                handleChange={handleDoYouKnow}
                setDoyouknowValue={setDoyouknowValue}
            />
            <ChangePageButton
                prev={true} next={false} submit={true}
                onClickPrev={() => setIndex(index - 1)}
            />
            </>
            }
            { loading && <Loading /> }
        </StyledRecruitForm>
    )
}

const StyledRecruitForm = styled.form`
padding: 3rem 2rem;
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
background-color: 'white';
`