import Axios from 'axios';
import { API } from '../core/parameters';

const getAll = () => Axios.get(`${API}/courses`).then(({ data }) => data);

export default { getAll };