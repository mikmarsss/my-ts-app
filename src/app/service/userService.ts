import { AxiosResponse } from "axios";
import { UserModel } from "../../entities/Models/userModel";
import $api from "../http";

export default class UserService {

    static async GetUsers(): Promise<AxiosResponse<UserModel[]>> {
        return $api.get<UserModel[]>('/users')
    }
}