import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://udemy-vue-stock-trader-7de18.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance