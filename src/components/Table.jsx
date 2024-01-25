import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import {deleteUser} from '../service/Api'
const Table = ({ data, headers }) => {
  const navigate = useNavigate();

  const handleEdit = async (id) => {
    navigate(`/edituser/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteUser(id);
      console.log(result);
      // Log the result, e.g., { success: 'Record deleted successfully' }
    } catch (error) {
      console.error(error.response); // Log the error response
    }
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
                <button className='btn btn-danger' onClick={() => handleDelete(item.userid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
