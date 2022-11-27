import axios from "axios";
import {Game} from "./models/Game";

async function getRequest(path: string) {
  return axios.get(path, {
    headers: {}
  });
}

async function postRequest(path: string, body: any) {
  return axios.post(path, body, {headers: {}})
}

const APIService = {
  getGames: async (id: number) => {
    return getRequest(`http://localhost:8080/getGame/${id}`)
  },
  postGame: async (game: Game) => {
    return postRequest(`http://localhost:8080/saveGame`, game)
  }
}

export default APIService;
