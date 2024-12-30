import { _axios } from "@/lib/axios";


class LoginRoute{
  
  async login(email: string, password: string){
    const response = await _axios.post('/auth/login', {
      email,
      password
    });
    return response.data;
  }
}

export const loginRoute = new LoginRoute();