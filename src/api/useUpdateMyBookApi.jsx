import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useUpdateMyBookApi = () => {
    const axiosSecure = useAxiosSecure()

    const updateMyBookPromise = (id, updatedData) =>{
        return axiosSecure.put(`books/user/${id}`, updatedData)
    }
    return {
        updateMyBookPromise
    }
};

export default useUpdateMyBookApi;