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
import useForm from './use-form'

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

    const [loading, setLoading] = useState(false)

    // navigate는 react function 위치에
    // handleSubmit 안에 있으면 오류?
    const navigate = useNavigate()

    const {
        index,
        attend,
        workshop,
        reason,
        personal_info,
        deposit,
        email,
        name,
        gender,
        university,
        major,
        minor,
        course,
        level,
        address,
        phone,
        interview,
        q1_introduce,
        q2_experience,
        q3_idea,
        q4_performance,
        q5_patience,
        q6_plan,
        filename,
        fileInfo,
        status,
        doyouknowpiro,
        doyouknowValue,
        setIndex,
        setAttend,
        setWorkshop,
        setReason,
        setPersonal_info,
        setDeposit,
        setEmail,
        setName,
        setGender,
        setUniversity,
        setMajor,
        setMinor,
        setCourse,
        setLevel,
        setAddress,
        setPhone,
        setInterview,
        setIntroduce,
        setExperience,
        setIdea,
        setPerformance,
        setPatience,
        setPlan,
        setFilename,
        setFileInfo,
        setStatus,
        setDoyouknowpiro,
        setDoyouknowValue,
        handleChange,
        onInfoChange,
        handleCheck,
    } = useForm()

    const tryFormSubmit = async () => {
        const body = {
            attend: attend,
            workshop: workshop,
            reason: reason,
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
            coding_test_file: fileInfo,
            doyouknowpiro: doyouknowpiro,
            doyouknowValue: doyouknowValue,
            piro_level: LEVEL,
        }

        // 코딩테스트 파일 저장
        const formData = new FormData()
        formData.append('coding-test', fileInfo)
        formData.append('name', name)
        const response = await fetch(`${SERVER_URL}/recruit/save_file`, {
            method: 'POST',
            body: formData
        })
        const {status} = await response.json();
        if(status === true) {
            setStatus('\0\0파일 저장 완료 ✅')
        } else {
            setStatus('\0\0파일 저장 실패 💔')
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

        return result
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (filename === '' || doyouknowpiro === '') {
            window.alert('입력하지 않은 항목이 있습니다.')
        } else {
            if (window.confirm('제출하시겠습니까? 정보를 정확하게 기입했는지 다시 한 번 확인해 주세요.')) {
                setLoading(true)
                setIndex(index + 1)

                const result = await tryFormSubmit();

                if (result.status == false) {
                    navigate("/fail")
                }
                navigate("/success", { state: { emailAddress: email } })
            }
        }
    }

    // 비어 있는 폼 확인
    const checkFirstForm = () => {
        if (attend === '' || attend === 'false'
            || workshop === '' || (workshop === 'false' && reason === '')
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
        if (name === '' || gender === '' || university === '' || major === ''
            || level === '' || address === '' || phone === '') {
            window.alert('입력하지 않은 항목이 있습니다.')
        } else {
            scrollTop()
            setIndex(index + 1)
        }
        // setIndex(index + 1)
    }
    const checkThirdForm = () => {
        if (q1_introduce === '' || q2_experience === '' || q3_idea === ''
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
            {index === 0
                && <>
                    <RecruitFirstPage
                        attend={attend} personal_info={personal_info} deposit={deposit}
                        workshop={workshop} setWorkshop={setWorkshop}
                        reason={reason} setReason={setReason}
                        handleChange={handleChange}
                    />
                    <ChangePageButton
                        prev={false} next={true} submit={false}
                        onClickNext={checkFirstForm}
                    />
                </>
            }
            {index === 1
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
            {index === 2
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
            {index === 3
                && <>
                    <RecruitLastPage
                        name={name} doyouknowpiro={doyouknowpiro} filename={filename} fileInfo={fileInfo}
                        status={status} doyouknowValue={doyouknowValue}
                        setFilename={setFilename}
                        setFileInfo={setFileInfo}
                        setStatus={setStatus}
                        setDoyouknowpiro={setDoyouknowpiro}
                        setDoyouknowValue={setDoyouknowValue}
                    />
                    <ChangePageButton
                        prev={true} next={false} submit={true}
                        onClickPrev={() => setIndex(index - 1)}
                    />
                </>
            }
            {loading && <Loading />}
        </StyledRecruitForm>
    )
}

const StyledRecruitForm = styled.form`
padding: 1rem 2rem 3rem 2rem;
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
background-color: 'white';
`
