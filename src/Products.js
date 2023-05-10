import 'firebase/firestore';
import db from "./Firebase";


import React, {useState,useEffect} from "react";
import { collection,getDocs,doc, updateDoc } from "firebase/firestore";


const Products = () => {


    const[data,setData]=useState();
    const[edit,setEdit]=useState();
    const[price,setPrice]=useState('');
    const pro=collection(db, "Products");
    
    
    const handleUpdate=async(id)=>{
        const proDoc = doc(db,"Products",id);
        await updateDoc(proDoc,{
            price:price
        })
        window.location.reload(false);
        // setEdit('');
  
    }
    
    useEffect(()=>{
        const getAll = async() => {
            const data = await getDocs(pro);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getAll();
    },[]);



    const trigger=(id)=>{
        setEdit(id);
    }
    console.log(price);



    return (
        <div className="flex flex-col items-center mt-10">
        <div className="overflow-x-auto">
            <div className="p-1.5 w-100 inline-block">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Product Name</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Price</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                data&&data.map((element)=>(
                                    element.id===edit ?
                                    <tr>
                                        <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>{element.pname}</td>
                                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"><input type='text' placeholder={element.price} onChange={e => setPrice(e.target.value)}></input></td>
                                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"><button className="text-green-500 hover:text-green-700" onClick={()=>handleUpdate(edit)}>Update</button></td>
                                    </tr>:   
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{element.pname}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{element.price}</td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button className="text-red-500 hover:text-red-700"onClick={()=>trigger(element.id)}>Edit</button>
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
 
export default Products;