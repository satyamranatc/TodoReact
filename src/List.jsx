import React,{useState,useEffect} from 'react'

export default function List({AllStudents}) {
    let [Class,setClass] = useState("");
    let [Data,setData] = useState(AllStudents);

    useEffect((e)=>{
    
        let data = AllStudents.filter((e)=>e.class==Class);
        console.log(data);
        setData(data);

    },[Class])


  return (
    <div>
        <center>
            <h2>List</h2>
            <select onChange={(e)=>{
                    // console.log(e.target.value);
                    setClass(e.target.value);
            }}  >
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <hr />
            {
            
            Data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>Name: {item.name}</h3>
                            <h3>Age: {item.age}</h3>
                            <h3>Class: {item.class}</h3>
                            <h3>Time: {item.time}</h3>
                            <hr />
                        </div>
                    )
                })
            }
        </center>
    </div>
  )
}
