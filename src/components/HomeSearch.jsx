"use client"

import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomeSeacrch (){
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    console.log(input)

    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        if (!input.trim()) return;
        router.push(`/search/web?searchTerms=${input}`);
    }

    async function randomSearch(e){
        setRandomSearchLoading(true)
        const response = await fetch ('https://random-word-api.herokuapp.com/word')
        const data = await response.json()
        const Url = data[0];

        if (!response) return;
        router.push(`/search/web?searchTerms=${Url}`);
        setRandomSearchLoading(false)
    }

    return(
        <>
        <form className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full 
        hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
        onSubmit={handleSubmit}
        >
            <AiOutlineSearch className='text-xl text-gray mr-3'/>
            <input 
            type="text" 
            className="flex-grow focus:outline-none"
            onChange={(e)=>setInput(e.target.value)}/>
            <BsFillMicFill className='text-lg'/>
        </form>
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-center mt-8 sm:space-x-4'>
            <button
                className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 
                focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
                onClick={handleSubmit}
            >
                Google Saerch
            </button>
            <button 
            disabled={randomSearchLoading}
                className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 
                focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow
                disabled:opacity-80 disabled:shadow-sm'
                onClick={randomSearch}
            >
                {randomSearchLoading ? "Loading..." :"Feeling Lucky" }
            </button>
        </div>
        </>
    )
}