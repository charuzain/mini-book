// step 1: import react from react dependency
// since it is a dependency in node modue 
// we use 'react' , if it was a file './filename'
// Step 2 : Create component 
// step 3 :Return JSX from component
// step 4 :since it is a entry point write addidiotnal code
// where we enject JS Into root of index.html
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function BookList(){
  return (
    <section className ="bookList">
    <Book/>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}; 


const Book = function(){
  return(
    <article className="book">
      <BookCover />
      <Title />
      <Author />
    </article>
  )
}
const BookCover = function(){ 
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SX338_BO1,204,203,200_.jpg" alt-text="Book Image"/>

  )
}
const Title = function () {
  return (
    <h3>Diary of a Wimpy Kid</h3>
  )
}
const Author = function(){
  return (
    <h4 >Jeff Kinney</h4>
  );
}
 
// const BookList = ()=>{
//   return React.createElement('h1',{},'hi');
// }

ReactDOM.render(<BookList/>, document.getElementById('root'));

