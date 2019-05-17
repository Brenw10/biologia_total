import Axios from 'axios';
import { API } from '../core/parameters';

const getAll = () => Axios.get(`${API}/students`).then(({ data }) => data);

const update = (id, data) => Axios.put(`${API}/students/${id}`, data);

const create = data => Axios.post(`${API}/students`, data);

export default { getAll, update, create };