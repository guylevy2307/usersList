import React,{useState} from "react";
import Card from "../UI/Card"
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUsers= props=>{
    const [enteredUsername,setEnterenedUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
            return;
        }
        if(+enteredAge<0){
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnterenedUsername('');
        setEnteredAge('');
    };
    const usernameChangerHandler =(event)=>{
    setEnterenedUsername(event.target.value);
    };
    const ageChangerHandler =(event)=>{
        setEnteredAge(event.target.value);
    };
    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor={"username"}>Your Name:</label>
            <input id={"username"} type={"text"} value={enteredUsername} onChange={usernameChangerHandler}/>
            <label htmlFor={"age"}>Your Age:</label>
            <input id={"age"} type={"number"}  value={enteredAge} onChange={ageChangerHandler}/>
            <Button type={"submit"}>Add User</Button>
    </form>
        </Card>
    )
};
export default AddUsers;