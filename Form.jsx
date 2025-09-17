function handlefromsubbmit(event){
    event.preventDefault();
    console.log("your responce has been tracked!!")
   

}

export default function Form(){
    return(
        <form onSubmit={handlefromsubbmit}>
            <input placeholder="write something"/>
            <button onClick={handlefromsubbmit}>press it!!!!</button>
        </form>
    );
    
}