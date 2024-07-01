import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/')
    };

    const register = async(userData)=>{
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/personal', userData);
            const {Token} = response.data;
            login(Token);
            Swal.fire('Registrado!!', 'Usuario registrado correctamente', 'success')
            navigate('/clientePromociones')
        }catch(error){
            console.log('Error al registrar usuario', error)
            Swal.fire('Error','Ocurrio un problema al registrar al usuario','error')
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
