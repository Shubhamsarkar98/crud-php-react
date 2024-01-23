import React from 'react';

const Table = ({ data, headers }) => {
  const handleView = (id) => {
    // Handle the view action (you can navigate to a view page or show details)
    console.log(`View clicked for user with ID ${id}`);
  };

  const handleEdit = (id) => {
    // Handle the edit action (you can navigate to an edit page)
    console.log(`Edit clicked for user with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Handle the delete action
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
                <button className='btn btn-primary' onClick={() => handleView(item.id)}>View</button>
              </td>
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
