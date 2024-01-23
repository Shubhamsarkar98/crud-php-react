
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/reactphp/api/reactphpcrud/user.php',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function add(data) {
  const res = await api.post('', data);
  return res.data;
}

export async function edit(id, data) {
  
  const res = await api.put('', { ...data, userid: id });
  return res.data;
}

export async function getUserById(id) {
  const res = await api.get(`/${id}`);
  return res.data;
}

export async function getAll() {
  const res = await api.get('');
  return res.data;
}
