import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Bobyson')
    //     .then(response => {
    //         console.log("API Response:", response.status);
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log("Data received:", data);
    //         setData(data)
    //     })
    //     .catch(error => {
    //         console.error("Error fetching data:", error);
    //     })
    // }, [])
    
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            <h1>Github Profile</h1>
            {data && (
                <div className="flex items-center justify-center gap-4">
                    <img 
                        src={data.avatar_url} 
                        alt="Github Profile" 
                        className="w-48 h-48 rounded-full border-4 border-white"
                    />
                    <div className="text-left">
                        <h2 className="text-2xl font-bold">{data.name}</h2>
                        <p className="text-xl">Followers: {data.followers}</p>
                        <p className="text-xl">Public Repos: {data.public_repos}</p>
                        <p className="text-xl">Bio: {data.bio}</p>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Github;

export const githubInfoLoader = async () => {
    const response =await fetch('https://api.github.com/users/Bobyson')
    return response.json()
}