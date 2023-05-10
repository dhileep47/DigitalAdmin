import 'firebase/firestore';
import db from "./Firebase";
import React, {useState,useEffect} from "react";
import { collection,deleteDoc, doc,getDocs } from "firebase/firestore";

const Orders = () => {
    const[data,setData]=useState();
   
    const deleteFeed= async(id)=>{

        
        const feedDoc=doc(db,"Orders",id);
        await deleteDoc(feedDoc);
        const getFeed = async()=>{
            const feedRef=collection(db,"Orders");
            const data = await getDocs(feedRef);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getFeed();
        
        
    }
     
    useEffect(()=>{
        const getFeed = async()=>{
            const feedRef=collection(db,"Orders");
            const data = await getDocs(feedRef);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getFeed();
    },[]);

        
    return (
        <div className="flex flex-col">
        <div className="">
            <div className="p-1.5 w-full inline-block align-middle">
                  
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
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
                                        href={element.ImageLink}
                                    >
                                        download
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button className="text-red-500 hover:text-red-700" href="Products.js" onClick={()=> { deleteFeed(element.id);
        }}>
                                       Delete
                                    </button>
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