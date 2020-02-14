import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './App.css';

function User() {
  const {id} = useParams();
    useEffect(()=>{  
      fetchItems(id);
    },[]);
    const [item,setItem] = useState([]);
    const fetchItems=async (id)=>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const dt = await data.json();
        console.log(dt);
        setItem(dt);
    }
  return (
    <div className="App">
      User Details:
      <div key={item.id}>
         <h3 >{item.name}</h3>
         <h4 >{item.username}</h4>
        
         <h4 >{item.phone}</h4>
       </div>
          
    </div>
  );
}

export default User;
