import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Label from '../components/Labal';
import { add, edit, getAll } from '../service/Api'; 
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
  const [name, setname] = useState('');
  const [status, setStatus] = useState('');
  const [emailBy, setemail] = useState('');
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const valueSelect = {
    selectFirst: 'Select your Status',
    SelectActive: 'Active',
    selecatFalse: 'InActive',
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const allUsers = await getAll();
          const userData = allUsers.find(user => user.id === id);
          if (userData) {
            setEditMode(true);
            setname(userData.username);
            setemail(userData.useremail);
            setStatus(userData.status);
          } else {
            console.error('User not found');
          }
        } catch (error) {
          console.error('Error fetching user data for edit:', error);
        }
      }
    };

    fetchData();
  }, [id]);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = {
      username: name,
      email: emailBy,
      status: status,
    };

    try {
      if (editMode) {
      const res=  await edit(id, data);
        alert('User updated successfully');
      } else {
        await add(data);
        alert('User added successfully');
      }
      navigate('/userlist');
    } catch (error) {
      console.error('API request failed', error);
    }
  };

  return (
    <div className='container' style={{ height: '600px' }}>
      <div className='row'>
        <div className='col-md-6 mt-4'>
          <h5 className='mb-4'>{editMode ? 'Edit User' : 'Add User'}</h5>
          <form>
            <div className='mb-3'>
              <Label htmlFor={'exampleInput'} labelName={'Add user'} />
              <Input
                type={'text'}
                placeholder={'Add user name'}
                id={'exampleInputEmail1'}
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </div>
            <div className='mb-3'>
              <Label htmlFor={'exampleInputEmail1'} labelName={'User Email'} />
              <Input
                type={'email'}
                placeholder={'User Email'}
                id={'exampleInputEmail1'}
                value={emailBy}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <Label htmlFor={'exampleInputstatus'} labelName={'Status'} />
              <Select options={valueSelect} value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary' onClick={(e) => handleClick(e)}>
              {editMode ? 'Update' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
