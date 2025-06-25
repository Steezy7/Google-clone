export default function loading(){
    return(
        <div className="pt-10 mx-2 lg:pl-52mx-w-6xl flex sm:flex-row sm:space-x-4 pb-42 flex-col">
            <div className="animate-pulse ">
                <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
                <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
            </div>

            <div className="hidden sm:inline-flex space-x-4">
                <div className="animate-pulse ">
                    <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
                    <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                    <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                </div>
                
                <div className="animate-pulse ">
                    <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
                    <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                    <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}