import React, { useState } from 'react'
import { styled } from 'styled-components'
import { SERVER_URL } from '../Variables'
import { LoginBtn, LoginInput } from './LoginInput';
import { authoHyphen } from '../utils';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${SERVER_URL}/auth/login`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: name, phone: phone, password: password})
        });
        
        // console.log('button pressed!');
        const result = await res.json();
        // console.log(result);
        if(result.result)
            navigate('/examine');
    }
    return (
        <StyledLoginForm
            onSubmit={handleSubmit}
        >
            <LoginInput
                value={name}
                onInput={(event) => setName(event.target.value)}
                type="text"
                placeholder="이름"
            />
            <LoginInput
                value={phone}
                onInput={(event) => {
                    event.target.value = authoHyphen(event.target);
                    setPhone(event.target.value);
                }}
                type="text"
                placeholder="전화번호"
            />
            <LoginInput
                value={password}
                onInput={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="비밀번호"
            />
            <LoginBtn />
        </StyledLoginForm>
    )
}

const StyledLoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
`