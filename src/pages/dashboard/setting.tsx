import Button from '@atoms/Button'
import { useAuth } from '@context/auth'
import React from 'react'
import { useNavigate } from 'react-router'

// import { Container } from './styles';

const setting: React.FC = () => {
    const { user, logout } = useAuth()

    return (
        <div className="p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <b className="text-lg">Email</b>
                <div>{user.email}</div>
            </div>

            <Button className="w-full" onClick={logout}>
                Logout
            </Button>
        </div>
    )
}

export default setting
