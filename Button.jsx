  function handleonclick(event){
    console.log("Hello!");
    console.log(event);
  }
  function handleMouseover(){
    console.log("bye");
  }
  
  export default function Button(){
    return(<div>
        <button onClick={handleonclick}>click me!!</button>
        <p onMouseOver={ handleMouseover}>try to check our mouse will responce</p>
    </div>);
 
}