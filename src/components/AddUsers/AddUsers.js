import React, { useState } from 'react';
import Header from '../Header/Header';

const AddUsers = () => {
    // const [user, setUser]=useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(user)
        e.target.reset();
    }

    return (
        <div>
            <Header></Header>
            <h1>Add User Information</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" name="name" id="name" placeholder='Name' /><br />
                <input required type="email" name="email" id="email" placeholder='Email' /><br />

                <button type="submit" className='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddUsers;