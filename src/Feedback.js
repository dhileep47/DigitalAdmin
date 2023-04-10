import 'firebase/firestore';
import db from "./Firebase";

import React, {useState,useEffect} from "react";
import { collection, deleteDoc, doc,getDocs } from "firebase/firestore";




const Feedback = () => {
    //Ref variable
    
    const [data,setData] = useState();
    const deleteFeed= async(id)=>{
        const feedDoc=doc(db,"Feedback",id);
        await deleteDoc(feedDoc);
        const getFeed = async()=>{
            const feedRef=collection(db,"Feedback");
            const data = await getDocs(feedRef);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getFeed();
        
        
    }
     
    useEffect(()=>{
        const getFeed = async()=>{
            const feedRef=collection(db,"Feedback");
            const data = await getDocs(feedRef);
            setData(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
        };
        getFeed();
    },[]);
    console.log(data);

   
    return ( 
        <div className="grid justify-center mx-auto">
        {data && data.map((element)=>
    <div key={element.id} className="flex flex-col justify-between p-4 leading-normal border">
        
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{element.Msg}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">by {element.Name}</p>
        <div className="flex justify-end">
        <button className="bg-black hover:bg-white text-white hover:text-black border hover:border-black  px-8 py-2 rounded-full">Reply</button>
        <button onClick={()=> { deleteFeed(element.id);
        }} className="bg-black hover:bg-white text-white hover:text-black border hover:border-black  px-8 py-2 rounded-full">Delete</button>      
        </div>
        
        
    </div>
        )}
   
        </div>

     );
}
 
export default Feedback;