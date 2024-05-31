import { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import AccesoDenegado from './AccesoDenegado'
import { getUserCokie } from '../utils/UserCokie'

const ProtectedByRol = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const rol = getUserCokie('rol')

    useEffect(() => {
        const checkToken = async () => {
            console.log(rol)
            if (!rol || rol !== "Administrador") return (<AccesoDenegado/>)
            setLoading(false)
        }
        checkToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rol])

    return loading ? (<AccesoDenegado />) : (children)
}

ProtectedByRol.propTypes = {
    children: PropTypes.node
}

export default ProtectedByRol

