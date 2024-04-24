import React,{useState,useEffect} from 'react'
import "./List.css"
export default function List({AllTasks,setAllTasks}) {

    let [TaskDone,setTaskDone] = useState(false);

    let Update = (I)=>
    {
        let TaksName = prompt("Enter Task Name");
        let TaskDesc = prompt("Enter Task Desc");
        let TaskCategory = prompt("Enter Task Category");

        let Obj = {
            TaskName:TaksName,
            TaskDesc:TaskDesc,
            Category:TaskCategory,
            time:new Date().getDay()
        }
        let NewArr = AllTasks.map((item,index)=>
        {
            if(index === I)
            {
                return Obj;
            }
            else
            {
                return item;
            }
        });
        setAllTasks(NewArr);
    
    }

    let Delete = (I) => {
        let RemainingData = AllTasks.filter((_,i)=>i != I);
        setAllTasks(RemainingData);
    }

    function DoneTask(e)
    {
        setTaskDone(!TaskDone);
        
    }



  return (
    <div>

        <center>
            {
                AllTasks.map((e,i)=>{
                    return(
                    <div className={TaskDone ? "Style" : null} key={i}>         
                            <h1>{e.TaskName}</h1>
                            <h1>{e.TaskDesc}</h1>
                            <h1>{e.Category}</h1>

                            <label htmlFor="Done">Done</label>
                            <input onChange={(e)=>DoneTask(e)} type="checkbox"id="Done" name="Done"/>
                           
                            <button onClick={()=>{Update(i)}}>Update</button>
                            <button onClick={()=>{Delete(i)}}>Delete</button>
                        </div>
                    )
                })
            }

        </center>
      
     
    </div>
  )
}
