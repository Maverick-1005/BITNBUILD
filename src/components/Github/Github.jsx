import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
     
    // const [data , setdata] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         setdata(data)
    //     } )
    // } , [])
    const data = useLoaderData()
    return(
        <div className="text-center p-4 bg-gray-600 text-white text-3xl">Github Followers: {data.followers} 
        <img src= {data.avatar_url} alt="GIT PICTURE" width={300}></img>
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}