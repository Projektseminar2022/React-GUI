import axios from "axios";
import {User} from "./models/User";
import {WeatherData} from "./models/WeatherData";

const USER_SERVICE_URL = "http://localhost:8080";
const QUERY_SERVICE_URL = "http://localhost:8080";
const DATA_AQUISITION_SERVICE_URL = "http://localhost:8080";

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
  //OUTDATED
  getBoxDataSimple: async  (hour_from: number, hour_to: number) => {
    //im optimalfall anfrage so: gib mir temp von stunde x bis y
    return getRequest(`api.link.here`) //TODO: add link here
  },
  //User Service
  createUser: async (user: User) => {
    return postRequest( `${USER_SERVICE_URL}/adduser`, user)
  },
  getUser: async (id: number) => {
    return getRequest(`${USER_SERVICE_URL}/getUser/${id}`)
  },
  getUsers: async () => {
    return getRequest(`${USER_SERVICE_URL}/getusers`)
  },
  deleteUser: async (id: number) => { //TODO nachfragen: im code ist im mapping keine Id
    return deleteRequest(`${USER_SERVICE_URL}/deleteUser/${id}`)
  },
  // Query Service
  getQueryByLocationAndTime: async (location: string, time: number) => {
    return getRequest(`${QUERY_SERVICE_URL}/query/find-by-location-and-time?location=${location}&time=${time}`)
  },
  getQueryByLocation: async (location: string) => {
    return getRequest(`${QUERY_SERVICE_URL}/query/find-by-location-at-current-time?location=${location}`)
  },
  getQueryByUser: async (user: User) => {
    return getRequest(`${QUERY_SERVICE_URL}/query/find-by-user`) //TODO user sollte hier besser als parameter übergeben werden (id)
  },
  //Data Acquisition Service
  getAllLocations: async () => {
    return getRequest(`${DATA_AQUISITION_SERVICE_URL}/api/Locations/all`)
  },
  getLocation: async (latitude: number, longitude: number) => {
    return getRequest(`${DATA_AQUISITION_SERVICE_URL}/api/Locations?latitude=${latitude}&longitude=${longitude}`)
  },
  postLocation: async (latitude: number, longitude: number) => {
    return postRequest(`${DATA_AQUISITION_SERVICE_URL}/api/Locations?latitude=${latitude}&longitude=${longitude}`, {})
  },
  deleteLocation: async (latitude: number, longitude: number) => {
    return deleteRequest(`${DATA_AQUISITION_SERVICE_URL}/api/Locations?latitude=${latitude}&longitude=${longitude}`)
  },
  getWeatherForecast: async (latitude: number, longitude: number) => {
    return getRequest(`${DATA_AQUISITION_SERVICE_URL}/WeatherForecast?latitude=${latitude}&longitude=${longitude}`)
  }
}

export default APIService;
