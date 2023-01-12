import axios from "axios";
import {Game} from "./models/Game";
import {User} from "./models/User";

async function getRequest(path: string) {
  return axios.get(path, {
    headers: {}
  });
}

async function postRequest(path: string, body: any) {
  return axios.post(path, body, {headers: {}})
}

async function deleteRequest(path: string) {
  return axios.delete(path, {headers: {}})
}

const APIService = {
  getBoxDataSimple: async  (hour_from: number, hour_to: number) => { //TODO add return type
    //im optimalfall anfrage so: gib mir temp von stunde x bis y
    return getRequest(`api.link.here`) //TODO: add link here
  },
  //User Service
  createUser: async (user: User) => {
    return postRequest(`http://localhost:8080/adduser`, user)
  },
  getUser: async (id: number) => {
    return getRequest(`http://localhost:8080/getUser/${id}`)
  },
  getUsers: async () => {
    return getRequest(`http://localhost:8080/getusers`)
  },
  deleteUser: async (id: number) => { //TODO nachfragen: im code ist im mapping keine Id
    return getRequest(`http://localhost:8080/deleteUser/${id}`)
  },
  // Query Service
  getQueryByLocationAndTime: async (location: string, time: number) => {
    return getRequest(`http://localhost:8080/query/find-by-location-and-time?location=${location}&time=${time}`)
  },
  getQueryByLocation: async (location: string) => {
    return getRequest(`http://localhost:8080/query/find-by-location-at-current-time?location=${location}`)
  },
  getQueryByUser: async (user: User) => {
    return getRequest(`http://localhost:8080/query/find-by-user`) //TODO user sollte hier besser als parameter übergeben werden (id)
  },
  //Data Acquisition Service
  getAllLocations: async () => {
    return getRequest(`http://localhost:8080/api/Locations/all`)
  },
  getLocation: async (latitude: number, longitude: number) => {
    return getRequest(`http://localhost:8080/api/Locations?latitude=${latitude}&longitude=${longitude}`)
  },
  postLocation: async (latitude: number, longitude: number) => {
    return postRequest(`http://localhost:8080/api/Locations?latitude=${latitude}&longitude=${longitude}`, {})
  },
  deleteLocation: async (latitude: number, longitude: number) => {
    return deleteRequest(`http://localhost:8080/api/Locations?latitude=${latitude}&longitude=${longitude}`)
  },
  getWeatherForecast: async (latitude: number, longitude: number) => {
    return getRequest(`http://localhost:8080/api/WeatherForecast?latitude=${latitude}&longitude=${longitude}`)
  }
}

export default APIService;
