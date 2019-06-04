import React from 'react';

//stateless functional component 
function PersonRow({ person, index, onDeleteClick }) {
    return (
        <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td>
                <button onClick={() => onDeleteClick(index)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default PersonRow;