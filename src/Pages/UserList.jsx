import React, { useState, useEffect } from 'react';
import { getAll } from '../service/Api';
import Table from '../components/Table';
import Input from '../components/Input';

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
          <Input type={'text'}  placeholder={"enter of search"}  id={'exampleInputEmail1'} />
          <Table data={data} headers={headers} />
        </div>
      </div>
    </div>
  );
};

export default UserList;
