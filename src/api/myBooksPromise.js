export const myBooksPromise = async(email, token) =>{
    return await fetch(`https://book-shelf-app-server.vercel.app/books/user?email=${email}`,{
        headers : {
            authorization : `Bearer ${token}`
        }
    }).then(res=> res.json())
}