import axios from 'axios'


export default{
  getRecent() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  },
  getAllTime() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  }
}