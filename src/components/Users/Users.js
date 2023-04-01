import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    const [displayedUser, setDisplayedUser] = useState(users);

    const handleRemove=(id)=>{
        const agree = window.confirm(`Are you sure to delete ${id}?`);
        if(agree){
            fetch(`http://localhost:5000/users/${id}`,{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(data=>{
                    const newUsers = displayedUser.filter(usr=>usr._id !== id);
                    setDisplayedUser(newUsers);
                    alert("Delete Successfully!")
                })
        }
        else{
            alert("Request Denied");
            console.log("Request Denied");
        }
    }
    return (
        <div>
            <Header></Header>
            <h1>Available Users : {displayedUser.length}</h1>
            <div className="container">
                {
                    displayedUser.map(user => <div key={user._id} className="single-user">
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        <Link to={`/users/update/${user._id}`}><button className='update'>Update</button></Link>
                        <button className='remove' onClick={()=>handleRemove(user._id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;