export default function Note(props){

    function handleClick(){
        props.onDelete(props.id); //pass a id over to the note component, pass it back to the app when deleting
    }

    return(
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete</button> {/* to trigger delete function */}
        
        </div>
    );
}