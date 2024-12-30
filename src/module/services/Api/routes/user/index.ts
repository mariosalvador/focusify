import { _axios } from "@/lib/axios";

class UserRoute {
  async register(user: UserToCreate) {
    const response = await _axios.post<Omit<User, 'password'>>('/user/create', user);
    return response.data;
  }

}

export const userRoute = new UserRoute();