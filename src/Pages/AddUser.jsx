import React, { useState } from 'react';
import Input from '../components/Input';
import Labal from '../components/Labal';
import Select from '../components/Select';

const AddUser = () => {
  const [name, setname] = useState('');
  const [status, setStatus] = useState('');

  const valueSelect = {
    selectFirst: 'Select your Status',
    SelectActive: 'Active',
    selecatFalse: 'InActive',
  };
  const [emailBy, setemail] = useState('')
  

  return (
    <div className='container' style={{ height: '600px' }}>
      <div className='row'>
        <div className='col-md-6 mt-4'>
          <h5 className='mb-4'> Add User</h5>
          <form>
            <div className='mb-3'>
              <Labal htmlFor={'exampleInput'} labalName={'Add user'} />
              <Input
                type={'text'}
                placeholder={'Add user name'}
                id={'exampleInputEmail1'}
                onChange={(e) => setname(e.target.value)}
                value={name}
              />
            </div>
            <div className='mb-3'>
              <Labal htmlFor={'exampleInputEmail1'} labalName={'User Email '} />
              <Input type={'email'} placeholder={'User Email'} id={'exampleInputEmail1'} value={emailBy} onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className='mb-3'>
              <Labal htmlFor={'exampleInputstatus'} labalName={'Status'} />
              <Select options={valueSelect} value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
