"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export default function PaginationButtons(){
const pathName = usePathname();
const searchParams = useSearchParams();
const searchTerm = searchParams.get('searchTerms');
const startIndex = +searchParams.get('start') || 1;

    return(
        <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
            {
                startIndex > 10 &&(
                    <Link href={`${pathName}?searchTerms=${searchTerm}&start=${startIndex-10}`}>
                        <div className="flex flex-col items-center hover:underline">
                            <BsChevronLeft className="h-5"/>
                            <p>Previous</p>
                        </div>
                    </Link>
                )
            }
            {
                startIndex <=90 &&(
                    <Link href={`${pathName}?searchTerms=${searchTerm}&start=${startIndex+10}`}>
                        <div className="flex flex-col items-center hover:underline">
                            <BsChevronRight className="h-5"/>
                            <p>Next</p>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}