import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Table = ({ data, headers }) => {
  const navigate = useNavigate();

 

  const handleEdit = async (id) => {
    navigate(`/edituser/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete clicked for user with ID ${id}`);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
          
            <th scope="col">Actions</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{item[header.toLowerCase()]}</td>
              ))}
              
              <td>
                <button className='btn btn-success' onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
              <td>
                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
