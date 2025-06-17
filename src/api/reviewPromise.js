export const reviewPromise = async(bookId) =>{
    return await fetch(`https://book-shelf-app-server.vercel.app/reviews?bookId=${bookId}`).then(res=> res.json())
}