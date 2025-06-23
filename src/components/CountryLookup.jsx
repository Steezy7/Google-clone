"use client"

import { useEffect, useState } from "react"

export default function CountryLookup(){
    const [country, setCountry] = useState("Loading...");

    useEffect(()=>{
        const getCountry = async() => {
            const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            const data = await response.json()
            const countGot = data.country_name
            setCountry(countGot);
            console.log(countGot);
        };
        getCountry()
    } , [])
    return(
        <h1>{country}</h1>
    )
}