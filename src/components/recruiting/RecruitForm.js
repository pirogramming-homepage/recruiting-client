import { React, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import { LEVEL, SERVER_URL } from '../Variables'
import { PiroHeader } from '../PiroHeader'
import { ChangePageButton } from '../Button'
import { RecruitFirstPage } from './RecruitFirstPage'
import { RecruitSecondPage } from './RecruitSecondPage'
import { RecruitThirdPage } from './RecruitThirdPage'
import { RecruitLastPage } from './RecruitLastPage'
import { Loading } from '../Loading'
import useForm from './use-form'
import { fetchPostApi, dateCheck } from '../utils'
import useTimeCheck from '../use-timeCheck'

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
        fileContent,
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
        setFileContent,
        setStatus,
        setDoyouknowpiro,
        setDoyouknowValue,
        handleChange,
        onInfoChange,
        handleCheck,
    } = useForm()

    const {
        isStart,
        setIsStart,
        timeCheck,
    } = useTimeCheck()
    useEffect(() => {
        timeCheck()
        //console.log(isStart)
    }, [])

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
            coding_test_content: fileContent,
            doyouknowpiro: doyouknowpiro,
            doyouknowValue: doyouknowValue,
            piro_level: LEVEL,
        }
        
        // 코딩테스트 파일 저장
        const formData = new FormData()
        formData.append('coding-test', fileInfo)
        formData.append('name', name)
        const file_response = await fetch(`${SERVER_URL}/recruit/save_file`, {
            method: 'POST',
            body: formData
        })
        const file_res_json = await file_response.json()
        // 데이터 저장
        const data_response = await fetchPostApi('/recruit/save_form', body)
        // 사본 이메일 전송
        const email_response = await fetchPostApi('/recruit/send_mail', body)

        console.log('file_res_json', file_res_json.status)
        console.log('data_res_json', data_response.status)
        console.log('email_res_json', email_response.status)

        if(file_res_json.status == true && data_response.status == 'success' && email_response.status == true) return 'success'
        else if(file_res_json.status == true && data_response.status == 'success' && email_response.status == false) return 'email false'
        else return 'fail'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(dateCheck() == 'before') {
            window.alert('아직 리크루팅 기간이 아닙니다!')
        } else if(dateCheck() == 'after') {
            window.alert('리크루팅이 종료되어 제출할 수 없습니다!')
        } else if (filename === '' || doyouknowpiro === '') {
            window.alert('입력하지 않은 항목이 있습니다.')
        } else {
            if (window.confirm('제출하시겠습니까? 정보를 정확하게 기입했는지 다시 한 번 확인해 주세요.')) {
                setLoading(true)
                setIndex(index + 1)

                const result = await tryFormSubmit()

                if (result == 'fail') {
                    navigate("/fail")
                } else if (result == 'email false') {
                    navigate("/success", { state: { emailAddress: email, message: '현재 접속량이 많아 응답 사본 전송이 지연되고 있으나 서류는 안전히 저장되었습니다! 잠시만 기다려 주세요.'}})
                } else {
                    navigate("/success", { state: { emailAddress: email, message: '' } })
                }
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
        <>
        {isStart == 'before' ? (
            <StyledNullContainer>
                {`아직 피로그래밍 ${LEVEL}기 리크루팅을 진행하지 않습니다!`}
            </StyledNullContainer>
        ) : isStart == 'after' ? (
            <StyledNullContainer>
                {`피로그래밍 ${LEVEL}기 리크루팅이 종료되었습니다!`}
            </StyledNullContainer>
        ) : (
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
                        name={name} doyouknowpiro={doyouknowpiro}
                        filename={filename} fileInfo={fileInfo} fileContent={fileContent}
                        status={status} doyouknowValue={doyouknowValue}
                        setFilename={setFilename}
                        setFileInfo={setFileInfo}
                        setFileContent={setFileContent}
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
        </StyledRecruitForm>)}
        </>
    )
}

export const StyledRecruitForm = styled.form`
padding: 1rem 2rem 3rem 2rem;
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
background-color: 'white';
@media (max-width: 768px) {
    padding: 0.5rem 0.5rem 1rem 0.5rem;
}
`

const StyledNullContainer = styled.form`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
height: 100vh;
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NanumSquareNeo-Variable';
background-color: 'white';
@media (max-width: 768px) {
    font-size: 4vw;
    line-height: 6vw;
}
`
