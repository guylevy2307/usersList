import React,{useState} from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css"
const ErrorModule=(props)=>{
    return (
        <div onClick={props.onHadelError}>
        <div className={classes.backdrop}/>
        <Card className={classes.modal}>
            <header  className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onHadelError}>Close</Button>
            </footer>
        </Card>
</div>
    )
};

export default ErrorModule;