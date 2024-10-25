import React,{ useState } from "react";

export function CreateArea(props){  //to pass the note back to the app

    const[note,setNote]=useState({
        title: "",
        content: ""
    });

    function handlechange(event){
        const{name,value}=event.target;  
    //creating destructure object using const key-word and this destructure object is going to tap
    // into event.target.name and event.target.value and we can use this name and value as seprate constant  

        setNote(prevNote=>{ //setnote we take previous note and add to the new note 
            return{
                ...prevNote, // spread operator going to spread all the key and value pairs that are currently existing in the note 
                [name]:value  //[name] is going to convert this simple name key to the value of upper name constant 
            };
        })
    }

 // default function of button inside the form is refresh we prevent that by event.preventdefault();
    function submitButton(event){
        props.onAdd(note) // passing note value to the app as props 
        setNote({
            title: "", // to clear the text when one note get apply 
            content: ""
        });
        event.preventDefault();

    }

    return(
        <div>
            <form>
                <input name="title" onChange={handlechange} value={note.title} placeholder="Title"/>
                <textarea name ="content" onChange={handlechange} value={note.content} placeholder="write your discription..." rows="3"/>
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
    );
}