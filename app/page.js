"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setdesc("")
    settitle("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0) {
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
            <div className="flex justify-between mb-5 w-2/3">
             <h5 className="text-2xl font-semibold">{t.title}</h5>
             <h6 className="text-lg font-semibold">{t.desc}</h6>
           </div>
           <button onClick={() => {
            deleteHandler(i)
           }}
           className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
     )
   })
  }

  return (
    <>
      <h2 className='bg-black text-white p-5 text-3xl font-bold text-center'>Chitrank's Todo List</h2>
      <form onSubmit= {submitHandler} >
        <input type='text' 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) =>{
            settitle
            (e.target.value)
          }}
        />

        <input type='text' 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Descrtiption Here'
          value={desc}
          onChange={(e) =>{
            setdesc
            (e.target.value)
          }}
        />

        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'> 
          Add Task
        </button>
      </form>    

      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
        </div>
    </>

  )
}

export default page


