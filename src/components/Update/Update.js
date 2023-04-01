import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Update = () => {
    const storedUser = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            alert("User Information updated successfully!")
        })
    }
    return (
        <div className='update-users'>
            <Header></Header>
            <h1>Update {storedUser.name}'s Information</h1>
            <form onSubmit={handleUpdate}>
                <input required defaultValue={storedUser.name} type="text" name="name" id="name" placeholder='Name' /><br />
                <input required defaultValue={storedUser.email} type="email" name="email" id="email" placeholder='Email' /><br />

                <button type="submit" className='submit'>Update</button>
            </form>
        </div>
    );
};

export default Update;