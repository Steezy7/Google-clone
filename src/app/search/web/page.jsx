import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

export default async function WebSearchPage({searchParams}){
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerms}`);

    if (!response.ok) {
  throw new Error("Something Went Wrong");
}

    const data = await response.json();
    const results = data.items; 

    if (!results){
        return (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">
                    No results for {searchParams.searchTerms}
                </h1>
                <p className="text-ld">
                    Try searching the web or images for something else
                </p>

                <Link href='/' className="text-blue-500">Home</Link>
            </div>
        )
    }

    return (
        <div className="text-black-500">
            {results && <WebSearchResults results ={data}/>}
        </div>
    )
}