import React, { useState } from 'react'

export default function useForm() {
  const [index, setIndex] = useState(0)
  const [attend, setAttend] = useState('')
  const [workshop, setWorkshop] = useState('')
  const [reason, setReason] = useState('')
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
  const [q5_patience, setPatience] = useState('')
  const [q6_plan, setPlan] = useState('')

  const [filename, setFilename] = useState('')
  const [fileInfo, setFileInfo] = useState()
  const [fileContent, setFileContent] = useState('')
  const [status, setStatus] = useState('')
  const [doyouknowpiro, setDoyouknowpiro] = useState('')
  const [doyouknowValue, setDoyouknowValue] = useState('')

  const handleChange = (name, value) => {
    switch (name) {
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
    switch (name) {
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
    let newInterview = new Set([...interview])
    if (!isChecked) {
      newInterview.add(value)
      setInterview(newInterview)
    } else if (isChecked) {
      newInterview.delete(value)
      setInterview(newInterview)
    }
  }
  return {
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
  }
}