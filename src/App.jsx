import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import List from "./List";
export default function App() {
  let [AllTasks, setAllTasks] = useState([]);
  let MyDate = new Date();

  return (
    <div>
      <center>
        <BrowserRouter>
          <center>
            <h2>
              <Link to="/">Home</Link>
            </h2>
            <h2>
              <Link to="/List">List</Link>
            </h2>
          </center>

          <Routes>
            <Route
              path="/"
              element={
                <fieldset style={{ width: "50%", marginTop: "100px" }}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      let Obj = {
                        TaskName: e.target[0].value,
                        TaskDesc: e.target[1].value,
                        Category: e.target[2].value,
                        time: MyDate.getDay()
                      };
                      setAllTasks([...AllTasks, Obj]);
                    }}
                  >
                    <input type="text" placeholder="Enter Task Name" />
                    <br />

                    <input type="text" placeholder="Enter Task Desc" />
                    <br />

                    <input type="text" placeholder="Task Category" />
                    <br />


                    <button>Submit</button>
                    {console.log(AllTasks)}
                  </form>
                </fieldset>
              }
            />

            <Route path="/List" element={<List setAllTasks = {setAllTasks} AllTasks = {AllTasks} />} />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
}
