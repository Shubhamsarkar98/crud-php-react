import React, { useState, useEffect } from 'react';
import { getAll } from '../service/Api';
import Table from '../components/Table';
import Input from '../components/Input';

const UserList = () => {
  const [data, setdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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


  const filteredData = data.filter((value)=>
   value?.username && value?.username.toString().toLowerCase().includes(searchTerm.toLowerCase())
  )




  return (
    <div className='container' style={{ height: '600px', margin: '20px' }}>
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-md-4' style={{paddingBottom:'10px;'}}>
          <Input
            type={'text'}
            placeholder={'Enter to Name'}
            id={'exampleInputEmail1'}
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          </div>
          <Table data={filteredData} headers={headers} />
        </div>
      </div>
    </div>
  );
};

export default UserList;
