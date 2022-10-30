import React,{useState} from "react";
import './App.css';
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
   const [userList,setUserList]= useState([]);
   const addUserHandler=(uName,uAge)=>{
       setUserList((prevList)=>
       {
           return [...prevList,{name:uName,age:uAge} ]
       });
   }
  return (
    <div className="App">
        <AddUsers onAddUser={addUserHandler}/>
        <UsersList users={userList}/>
    </div>
  );
}

export default App;
