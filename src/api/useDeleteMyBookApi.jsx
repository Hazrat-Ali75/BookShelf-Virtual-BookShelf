import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useDeleteMyBookApi = () => {
    const axiosSecure = useAxiosSecure()

    const deleteMyBookPromise = (id) =>{
        return axiosSecure.delete(`books/user/${id}`)
    }
    return {
        deleteMyBookPromise
    }
};

export default useDeleteMyBookApi;