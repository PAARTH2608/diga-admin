import Axios from 'axios'
import {BASE_API_URL} from './constants';

class AuthService {
  async login(cred) {
    // console.log(cred)
    try {
      const response = await Axios.post(`${BASE_API_URL}/admin/login`, cred);
      console.log("hehehehe");
      return response.data;
    } 
    catch (error) {
      console.log("it is an error");
      throw error;
    }
  }

  async getBookings(token) {
		// console.log('my name is', token);
		try {
			const response = await Axios.post(
				`${BASE_API_URL}/admin/getBookings`,
				token
			);
			console.log('hehoheho', response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
  // async getVehicles(token){
  //   console.log(token);
  //   try{
  //     const response = await Axios.post(`${BASE_API_URL}/admin/getVehicles`, token);
  //     return response.data;
  //   }
  //   catch(err){
  //     console.log(err);
  //     throw err;
  //   }
  // }
}

export default AuthService;
