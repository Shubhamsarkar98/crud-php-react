import React, { useState, useEffect } from 'react';
import { getAll } from '../service/Api';
import Table from '../components/Table';

const UserList = () => {
  const [data, setdata] = useState([]);

  const headers = ['ID', 'Username', 'useremail', 'Status'];

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    try {
      const response = await getAll();
      setdata(response);
    } catch (error) {
      console.error('API request failed', error);
    }
  };

  return (
    <div className='container' style={{ height: '600px', margin: '20px' }}>
      <div className='row'>
        <div className='col-md-12'>
          <Table data={data} headers={headers} />
        </div>
      </div>
    </div>
  );
};

export default UserList;
