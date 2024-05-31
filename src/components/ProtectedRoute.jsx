import { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { getTokenLocalStorage } from '../utils/localStorage'
import { useAuth } from '../auth/AuthContext'
import AccesoDenegado from './AccesoDenegado'

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    const token = getTokenLocalStorage('token')
    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()

    useEffect(() => {
        const checkToken = async () => {
            console.log(token)
            if (!token) return (<AccesoDenegado/>)
            setLoading(false)
        }
        checkToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return loading ? (<AccesoDenegado />) : (children)
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute
