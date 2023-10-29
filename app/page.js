"use client"
import { list } from "postcss";
import React, { useState } from "react";


const page = () => {
  const [title, settitle]= useState("")
  const [desc, setdesc]= useState("")
const[maintask,setmaintask]=useState([])

  const submitHandler= (e)=> {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("")
    setmaintask([...maintask,{title, desc}])
    console.log(maintask)
  }
 const deletehandler=(i)=>{
let copytask=[...maintask]
copytask.splice(i,1)
setmaintask(copytask)
 }
let rendertask=<h2>No Task Available</h2>


  if (maintask.length>0) {
rendertask=maintask.map((t,i)=>{
    return( 
      <ol key={i} className=" flex items-cente justify-between my-1">
        <div className="flex justify-between mb-2 w-2/3">
        <h5 className="text-xl font-semibold">{t.title}</h5>
        <h6 className="text-xl">{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deletehandler(i)
      }}
      className="bg-red-400 rounded text-white px-1 font-semibold">Delete</button>
      </ol>
    )
  })
}

  return (
    <>
      <h1 className="mx-6 my-6 bg-black text-white text-center">Todolist</h1>

      <form onSubmit={submitHandler} >
        <input
          type="text"
          className="border-zinc-800 border-2
          mx-6 my-6 p-1 text-xl rounded-xl"
          placeholder="Enter Title here"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="border-zinc-800 border-2
          mx-6 my-6 p-1 text-xl rounded-xl"
          placeholder="Enter Descreption here"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white mx-3 px-3 py-2 font-bold rounded">Add Task</button>
      </form>
      <hr/>
      <div className="bg-slate-300 p-4 "><ul>{rendertask}</ul></div>
    </>
  );
};

export default page;