// import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState(null); // Default null रखा क्योंकि API एक object return करेगी
    // const username = "xyz"; // यहाँ अपना GitHub username डालें

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/ravikant-pandey`)
    //         .then(response => response.json()) // JSON में convert करें
    //         .then(userData => {
    //             console.log(userData);
    //             setData(userData); // Data को set करें
    //         })
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-4xl'>
            {data ? `GitHub Followers: ${data.followers}` : "Loading..."}
            {data && <img src={data.avatar_url} alt="Avatar" width={300} className="rounded-full border-2 border-white cursor-pointer" />}
            </div>
    );
}

export default Github;

export const githubInfoLoader = async()=>
{
   const response = await fetch(`https://api.github.com/users/ravikant-pandey`)
   return response.json()
}
