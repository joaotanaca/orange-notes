import Button from '@atoms/Button'
import React from 'react'
import { useNavigate } from 'react-router'

const Dashboard: React.FC = () => {
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

export default Dashboard
