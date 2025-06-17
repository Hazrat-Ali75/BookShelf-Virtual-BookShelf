import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateProvider = ({children}) => {
    const {loading,user} = useContext(AuthContext);

    const location = useLocation()

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user && user.email){
        return children
    }

    return <Navigate state={location.pathname} to='/auth/signin'></Navigate>
};

export default PrivateProvider;