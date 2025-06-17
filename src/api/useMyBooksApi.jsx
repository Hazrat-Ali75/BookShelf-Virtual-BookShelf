import React from 'react';
import { useCallback } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useMyBooksApi = () => {
    const axiosSecure = useAxiosSecure()

    const myBookPromiseSecure = useCallback((email) =>{
        return axiosSecure.get(`books/user?email=${email}`)
    },[axiosSecure])
    return {
        myBookPromiseSecure
    }
};

export default useMyBooksApi;