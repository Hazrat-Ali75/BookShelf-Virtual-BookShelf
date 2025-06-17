import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const usePostBookApi = () => {
    const axiosSecure = useAxiosSecure()
    const postBookPromise = (data) =>{
        return axiosSecure.post('books', data)
    }
    return {
        postBookPromise
    }
};

export default usePostBookApi;