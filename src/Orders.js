const Orders = () => {
    return ( 
        <div className="grid grid-cols-2 w-1/2 mx-auto">
        <div className="flex flex-col h-40 w-96 p-4 leading-normal border">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Product name</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by user </p> 
    </div>
        <div className="">
        <button className="bg-black hover:bg-white text-white hover:text-black border hover:border-black  px-4 py-2 rounded-full">Download</button>      
        </div>
    </div>
     );
}
 
export default Orders;