import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Student.css'

const Student = (props) => {
    console.log(props);
    const student = props.studentInfo;
    return (
        <div className="student">
            <div className="img">
                <img className="img-border" src={student.picture.large} alt="" />
            </div>
            <div>
                <h3 className="heading">{student.name.first} {student.name.first}</h3>
                <p>Gender: {student.gender}</p>
                <p className="paragraph">E-mail: {student.email}</p>
                <p className="paragraph">Phone: {student.phone}</p>
                <button className="main-button" onClick={()=>props.handleAddProduct(student)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Present
                </button>
            </div>

        </div>
    );
};

export default Student;