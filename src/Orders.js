import 'firebase/firestore';
import db from "./Firebase";
import React, {useState,useEffect} from "react";
import { collection, doc,getDocs } from "firebase/firestore";

const Orders = () => {
    const[data,setData]=useState();
    const ord=collection(db, "Orders");
    useEffect(()=>{
        const getAll = async() => {
            const data = await getDocs(ord);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getAll();
    },[]);
    console.log(data);
        
    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Customer Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Product Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Mobile no
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Download
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                data&&data.map((element)=>(
                                    
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    1
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {element.Name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {element.Product}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {element.Mail}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {element.Phn}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a
                                        className="text-green-500 hover:text-green-700"
                                        href="Products.js"
                                    >
                                        download
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a
                                        className="text-red-500 hover:text-red-700"
                                        href="Products.js"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                                ))
                            }
                    
                            
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>   
     );
}
 
export default Orders;