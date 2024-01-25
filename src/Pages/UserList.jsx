import React, { useState, useEffect } from 'react';
import { getAll } from '../service/Api';
import Table from '../components/Table';
import Input from '../components/Input';

const UserList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [sortedField, setSortedField] = useState('username'); // Default sorting field

  const headers = ['ID', 'Username', 'useremail', 'Status'];

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    try {
      const response = await getAll();
      setData(response);
    } catch (error) {
      console.error('API request failed', error);
    }
  };

  const handleSort = (field) => {
    if (sortedField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortedField].toString().toLowerCase();
    const bValue = b[sortedField].toString().toLowerCase();

    if (sortOrder === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const filteredData = sortedData.filter((value) =>
    value?.username &&
    value?.username.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container' style={{ height: '600px', margin: '20px' }}>
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-md-4' style={{ paddingBottom: '10px' }}>
            <Input
              type={'text'}
              placeholder={'Enter to Name'}
              id={'exampleInputEmail1'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Table data={filteredData} headers={headers} onSort={handleSort} sortOrder={sortOrder} sortedField={sortedField} />
        </div>
      </div>
    </div>
  );
};

export default UserList;
