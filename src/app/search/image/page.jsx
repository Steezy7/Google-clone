import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function ImageSearchPage({searchParams}){
    const startIndex = searchParams.start || "1";
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerms}&searchType=image&start=${startIndex}`);

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
            {results && <ImageSearchResults results ={data}/>}
        </div>
    )
}