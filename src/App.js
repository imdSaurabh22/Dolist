import Header from "./Component/Header";
import Note from "./Component/notes"
import Footer from "./Component/footer";
import { CreateArea } from "./Component/Createarea";
import { useState } from "react";


function App() {

  const[notes,setNotes]=useState([]) ;

  function addNote(newNotes){  // receive the note from the createArea
    setNotes(prevNotes=>{
      return [...prevNotes, newNotes]; // add new note to the array 
    });
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{ //filter function to filter out items that need deletion
        return index !==id
      });
    });
  }


  return (
  <div>
    <Header/>
    <CreateArea onAdd={addNote}/> {/* pass it as a props  */}
   { notes.map((noteItem , index) =>{
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
    })}
    {/* 4 take array and render seprate note component for each time  */}
    
    <Footer />
    
  </div>   

  );
}

export default App;
