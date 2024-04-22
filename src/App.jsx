import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import List from "./List";
export default function App() {
  let [AllStudents, setAllStudents] = useState([]);
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
                        name: e.target[0].value,
                        age: e.target[1].value,
                        class: e.target[2].value,
                        time: MyDate.getDay()
                      };
                      setAllStudents([...AllStudents, Obj]);
                    }}
                  >
                    <input type="text" placeholder="Enter Your Name" />
                    <br />

                    <input type="text" placeholder="Enter Your Age" />
                    <br />

                    <input type="text" placeholder="Enter Your Class" />
                    <br />

                    <button>Submit</button>
                    {console.log(AllStudents)}
                  </form>
                </fieldset>
              }
            />

            <Route path="/List" element={<List AllStudents = {AllStudents} />} />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
}
