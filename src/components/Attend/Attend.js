import React, { useState } from 'react';
import fakeUser from '../../fakeUSER/user'
import './Attend.css';
import Student from '../Student/Student';
import Cart from '../Cart/Cart';

const Attend = () => {
    const first10 = fakeUser.slice(0,20);
    const [users,setUsers] = useState(first10);
    //console.log(users);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (student) =>{
        // console.log("Student present",student);
        const newCart = [...cart,student];
        setCart(newCart);
    }
    return (
        <div className="students-container">
            <div className="user-container">
                {
                    users.map(std => <Student studentInfo={std} handleAddProduct={handleAddProduct}>
                        
                        </Student>)
                }
            </div>
            <div className="donation-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Attend;