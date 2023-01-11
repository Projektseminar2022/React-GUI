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
  },
  getBoxDataSimple: async  (hour_from: number, hour_to: number) => { //TODO add return type
    //im optimalfall anfrage so: gib mir temp von stunde x bis y
    return getRequest(`api.link.here`) //TODO: add link here
  },
}

export default APIService;
