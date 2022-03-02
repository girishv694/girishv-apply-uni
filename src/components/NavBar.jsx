import React from "react";
import "./Navbar.css";
import TotalSession from "./TotalSession";
import Input from "./Input";
import Modal from 'react-modal';
import {useState} from 'react';


function NavBar() {

  const [modelisopen,setmodelisopen] = useState(false);

 
  return (
    <div>
      <div className="w-96 h-16 navbar  mt-12 flex flex-row gap-2 ">
        <div className="w-full h-full flex flex-col gap-4 ml-1 justify-center">
          <img src="vect3.png" className="h-10 w-10 ml-2" alt="" onClick={()=>setmodelisopen(true)}/>
          <Modal isOpen={modelisopen} className="users w-80 h-full flex mx-auto">
          <div className="w-full h-full flex flex-col">
          <div className="flex gap-10">
          <div><p className="text-white ml-5 mt-5">user@gmail.com</p></div>
         <div> <button className="text-white rounded-lg mt-5 bg-sky-500 w-24" onClick={()=>setmodelisopen(false)}>close</button></div>
         </div>
          <button className="rounded w-1/5 bg-sky-500 mx-auto mt-10">Logout</button>
          
          
          </div>
          </Modal>
        </div>
        <img src="Group 18436.png" className="mr-10" alt="apply" />
      </div>
      <div className="w-full flex space-x-32 mt-8 ml-2">
        <img src="Leads Analytics.png" className="w-48" alt="" />
        <img src="vectorr.png" alt="" />
      </div>
      <TotalSession/>
      <div className="w-96 mt-12">
      <img src="allLead.png" className="ml-4" alt=""/>
      </div>
      <Input/>

      
      
    </div>
  );
}

export default NavBar;
