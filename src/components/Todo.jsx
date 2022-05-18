import React, { useState } from 'react'


const Todo = () => {
  // const addItems = ()=>{
   
  // }

  const [inputItem,setInput] = useState("")
  const [listItems,setList] = useState([])

  const deleteItem = (ind) =>{
    const updatedList = listItems.filter((elem,id)=>{
      return id!==ind;
    })
    setList(updatedList)
  }

  return (
    <>
    <div className="container">
      <div className="child">
        <figure>
          <img src="http://images.squarespace-cdn.com/content/v1/572b90fa8a65e243d508a96d/1523859090212-O7KEV0TF29OIV2CL7ZNL/TODO+-+Logo+%28White%29+Grid+6.30.17.png" alt="" />
          </figure> 
    <input 
    placeholder='Add a Task 📃'
    type="text" 
    value={inputItem} 
    onChange={(e)=>{
    setInput(e.target.value)
    }}/>

    <button className='addbtn'
    onClick={()=>{
      if(inputItem)
     { setList([...listItems,inputItem])
      setInput("")}
    }}>
    +</button>

    <div className='listView'>
      {
          listItems.map((elem,ind)=>{
            return(
              <div className="eachItem" key={ind}>
                <h1>{elem}</h1>
                <div className="todo-btn">
                <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>{deleteItem(ind)}}/>
                </div>
              </div>
                )
          })
      }
    
    </div>
    
      </div>
    </div>
   </>

  )
}

export {Todo};

