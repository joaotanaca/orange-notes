import React, { useCallback, useMemo } from 'react'
import { RiHomeFill, RiAddCircleFill } from 'react-icons/ri'
import { GoSettings } from 'react-icons/go'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    const location = useLocation()
    const showNavbar = useMemo(
        () => !location.pathname.match(/login|signup/g)?.length,
        [location]
    )

    const getColor = useCallback(
        (search: string) =>
            location.pathname === search ? 'text-link' : 'text-gray-600',
        [location.pathname]
    )

    const linkActive = useMemo(
        () => ({
            addTask: getColor('/dashboard/add-task'),
            home: getColor('/dashboard'),
            settings: getColor('/dashboard/setting'),
        }),
        [location.pathname]
    )

    return showNavbar ? (
        <div className="fixed w-full bottom-0 flex justify-around items-center pt-4 pb-5 px-6 bg-white drop-shadow-3xl z-50">
            <Link to="/dashboard/add-task">
                <RiAddCircleFill
                    className={`${linkActive.addTask}`}
                    size={36}
                />
            </Link>
            <Link to="/dashboard">
                <RiHomeFill className={`${linkActive.home}`} size={24} />
            </Link>
            <Link to="/dashboard/setting">
                <GoSettings className={`${linkActive.settings}`} size={24} />
            </Link>
        </div>
    ) : null
}

export default Navbar
