import HomeHeader from "@/components/HomeHeader"
import HomeSeacrch from "@/components/HomeSearch"
import Image from "next/image"

export default function  HomePage(){
  return(
    <>
      <HomeHeader/>
      <div className="flex flex-col items-center mt-40">
        <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        alt="google logo"
        width={300} 
        height={100}
        priority
        style={{width:"auto"}}
        />

        <HomeSeacrch/>
      </div>
    </>
  )
}