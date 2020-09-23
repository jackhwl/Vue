import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
})

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';

// ->header('Access-Control-Allow-Origin', '*')
// ->header('Access-Control-Allow-Methods', '*') // GET, POST, PUT, PATCH, DELETE, OPTIONS
// ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
export default instance