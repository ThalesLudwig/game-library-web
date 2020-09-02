import axios, { AxiosResponse } from 'axios';
import Response from '../models/Response';

export default class GameService {

    private url: string = "https://api.rawg.io/api/games?search=";

    getByName(arg: string): Promise<AxiosResponse<Response>> {
        return axios.get<Response>(this.url + arg);
    }
};