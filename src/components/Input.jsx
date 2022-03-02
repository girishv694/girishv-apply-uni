import React from 'react'
import {useState} from 'react'
import "./Navbar.css"
import Modal from 'react-modal';

function Input() {
    const[searchTerm,setSearchTerm] =useState("")
    const [modelisopen,setmodelisopen] = useState(false);
  return (
    <div>
    <div className='flex flex-row gap-2 mt-4'>
    <div className="h-12 w-80 ml-2  rounded-xl bgg flex ..." >
                      <img src="Search.png" alt="searchicon" className="pt-4 pl-4 pb-4"/>
                      <input placeholder="Search..." type="text" onChange={event => {setSearchTerm(event.target.value)}} className="ml-2  text-white text-sm bgg outline-none"/>
                  </div>
               <div>
               
               <img src="vectorr.png" alt="" onClick={()=>setmodelisopen(true)}/>
               
               <Modal isOpen={modelisopen} className="users h-full w-80 flex mx-auto rounded-2xl border-4">
               <div className='w-56 h-24'>
               <div className='flex ml-10 mt-5'>
               <h1 className='text-white text-2xl'>Status</h1>
               <h1 className='text-white underline ml-24'>Reset</h1>
               </div>
               <div className="ml-10 mt-10 flex flex-col gap-5">
               <div className="flex gap-10"><input type="radio"  className='w-6 h-6'/><p className="text-white text-xl" name="select" value="all">All</p></div>
               <div className="flex gap-10"><input type="radio" className='w-6 h-6'/><p className="text-white text-xl" name="select" value="uncontacted">Uncontacted</p></div>
               <div className="flex gap-10"><input type="radio" className='w-6 h-6'/><p className="text-white text-xl" name="select" value="contacted">Contacted</p></div>
             <p className='text-white font-bold'>Date Range</p> 
               <div className='w-60 h-60 bg-white rounded-md'>
               
               </div>
               <div className='flex flex-row gap-16 mt-10'>
               <button onClick={()=>setmodelisopen(false)} className="w-56 pl-5 pr-5 border-2 rounded-3xl pt-2 pb-2 text-white hover:bg-sky-600">Cancel</button>
               <button className="pl-5 pr-5 border-2 rounded-3xl pt-2 pb-2 text-white ">Submit</button>
               </div>
               </div>
               </div>
               
               </Modal>
             
               </div> 
               
    </div>
    <div className='w-96 flex ml-56 text-white'>Found 25 results</div>
    </div>
  )
}

export default Input