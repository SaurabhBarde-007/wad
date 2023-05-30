import { useState } from "react";


const UseStateBasics = () => {

  // const value = useState('hello')[0]
  // const func = useState('hello')[1]
  // console.log(value)
  // console.log(func)

  const [count,setCount]= useState(0);

  const handleIncClick = ()=>{
      setCount(count+1)
  }

  const handleDecClick = ()=>{
    if(count != 0 ){
      setCount(count-1)
    }
    else{
      alert("count increase kar bhai")
    }
  }

  return (
    <>
      <h4>You Clickd {count} times</h4>
      <button type="button" className="btn" onClick={handleIncClick}>increase</button>
      <button type="button" className="btn" onClick={handleDecClick}>decrease</button>
    </>  
    )
};

export default UseStateBasics;