import Axios from 'axios';
import { API } from '../core/parameters';

const getAll = () => Axios.get(`${API}/courses`).then(({ data }) => data);

const update = (id, data) => Axios.put(`${API}/courses/${id}`, data);

const create = data => Axios.post(`${API}/courses`, data);

export default { getAll, update, create };