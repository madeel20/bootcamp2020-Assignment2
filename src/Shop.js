import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop() {
    
    useEffect(()=>{
        fetchItems();
    },[]);
    const [item,setItem] = useState([]);
    const fetchItems=async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dt = await data.json();
        console.log(dt);
        setItem(dt);
    }
  return (
    <div className="App">
       {item.map((item)=>{
          return <Link to={`posts/${item.userId}`}><h3 key={item.id}>{item.title}</h3> </Link>
      })}
          
    </div>
  );
}

export default Shop;
