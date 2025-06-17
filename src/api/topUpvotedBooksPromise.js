export const topUpvotedBooksPromise = async() =>{
    return await fetch('https://book-shelf-app-server.vercel.app/topupvotedbooks').then(res=> res.json())
}