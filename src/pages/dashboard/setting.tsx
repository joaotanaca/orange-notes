import Button from '@atoms/Button'
import React from 'react'
import { useNavigate } from 'react-router'

// import { Container } from './styles';

const setting: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Button
                onClick={() => {
                    localStorage.removeItem('token')
                    navigate('/login')
                }}
            >
                Logout
            </Button>
        </div>
    )
}

export default setting
