import { useState } from "react"




function Square({value, onSquareClick}){

  return(

        <>
        <button onClick={onSquareClick} className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">{value}</button>
        </>
  )
}
 



function Board() {

  const [square, setSquare,] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculaterWinner(square);
  let status ;

  if (winner){
    status = `winner:${winner}`
  }else{
    status = "Next Player" + (xIsNext ? "X" : "O")
  }


  function handClick(i){


    //যদি square[i] ডাটা থাকে তাহলে কাজ করবে, না হয় নিচে চলে যাবে...
    if(square[i] || calculaterWinner(square)){
      return;
    }

    // here we made a new array nemed nextSquare though it looks loke then previous one but referenc is different
   const nextSquare = square.slice();

   if(xIsNext){
    nextSquare[i]= 'X';
   
   } else{
    nextSquare[i]= 'O';
   
   }
   setSquare(nextSquare)
   setXIsNext(!xIsNext);
  } 
 
  return (
    <> 
    <div>{status}</div>
    
    <div className="flex">
          <Square value = {square[0]} onSquareClick={()=>handClick(0)} />
          <Square value = {square[1]} onSquareClick={()=>handClick(1)}/>
          <Square value = {square[2]} onSquareClick={()=>handClick(2)}/>
  
       </div>

       <div className="flex">
          <Square value = {square[3] } onSquareClick={()=>handClick(3)} />
          <Square value = {square[4]} onSquareClick={()=>handClick(4)}/>
          <Square value = {square[5]} onSquareClick={()=>handClick(5)}/>
       </div>

       <div className="flex">
          <Square value = {square[6]} onSquareClick={()=>handClick(6)} />
          <Square value = {square[7]} onSquareClick={()=>handClick(7)}/>
          <Square value = {square[8]} onSquareClick={()=>handClick(8)}/>
       </div>
    
    </>
  )
}




export default function Game() {

  return(
    <>
      <div>
        <Board/>
      </div>

      <div>

        <ol>{/*tbd*/}</ol>
  
      
      </div>
      
    </>
  )

  
}




function calculaterWinner(square){
  const lines =  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i =0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]){
      return square[a]
    }
  }
  return null;
}
