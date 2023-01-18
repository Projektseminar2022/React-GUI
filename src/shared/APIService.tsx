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
    return new Promise<WeatherData[]>((resolve, reject) => {
      resolve([
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T13:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464229Z",
          "weather": {
            "dt": 1674046800,
            "temp": 3.3,
            "feels_like": 0.58,
            "pressure": 998,
            "humidity": 67,
            "dew_point": -1.97,
            "uvi": 0.39,
            "clouds": 24,
            "visibility": 10000,
            "wind_speed": 2.86,
            "wind_deg": 276,
            "wind_gust": 4.63,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T14:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464537Z",
          "weather": {
            "dt": 1674050400,
            "temp": 3.15,
            "feels_like": 0.29,
            "pressure": 998,
            "humidity": 70,
            "dew_point": -1.58,
            "uvi": 0.22,
            "clouds": 20,
            "visibility": 10000,
            "wind_speed": 2.99,
            "wind_deg": 271,
            "wind_gust": 4.94,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T15:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464539Z",
          "weather": {
            "dt": 1674054000,
            "temp": 3.24,
            "feels_like": 0.9,
            "pressure": 998,
            "humidity": 68,
            "dew_point": -1.85,
            "uvi": 0.08,
            "clouds": 22,
            "visibility": 10000,
            "wind_speed": 2.41,
            "wind_deg": 262,
            "wind_gust": 5.24,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T16:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464541Z",
          "weather": {
            "dt": 1674057600,
            "temp": 2.8,
            "feels_like": 0.52,
            "pressure": 999,
            "humidity": 68,
            "dew_point": -2.22,
            "uvi": 0,
            "clouds": 23,
            "visibility": 10000,
            "wind_speed": 2.27,
            "wind_deg": 244,
            "wind_gust": 4.93,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T17:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464543Z",
          "weather": {
            "dt": 1674061200,
            "temp": 2.23,
            "feels_like": -0.28,
            "pressure": 1000,
            "humidity": 70,
            "dew_point": -2.36,
            "uvi": 0,
            "clouds": 24,
            "visibility": 10000,
            "wind_speed": 2.4,
            "wind_deg": 230,
            "wind_gust": 6.21,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T18:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464544Z",
          "weather": {
            "dt": 1674064800,
            "temp": 1.56,
            "feels_like": -1.4,
            "pressure": 1000,
            "humidity": 72,
            "dew_point": -2.59,
            "uvi": 0,
            "clouds": 23,
            "visibility": 10000,
            "wind_speed": 2.74,
            "wind_deg": 203,
            "wind_gust": 7.33,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T19:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464546Z",
          "weather": {
            "dt": 1674068400,
            "temp": 1,
            "feels_like": -2.03,
            "pressure": 1002,
            "humidity": 72,
            "dew_point": -3.91,
            "uvi": 0,
            "clouds": 10,
            "visibility": 10000,
            "wind_speed": 2.7,
            "wind_deg": 209,
            "wind_gust": 7.72,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "Klarer Himmel",
                "icon": "01n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T20:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464548Z",
          "weather": {
            "dt": 1674072000,
            "temp": 0.96,
            "feels_like": -2.39,
            "pressure": 1002,
            "humidity": 74,
            "dew_point": -3.63,
            "uvi": 0,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 3.05,
            "wind_deg": 211,
            "wind_gust": 8.35,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "Klarer Himmel",
                "icon": "01n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T21:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464549Z",
          "weather": {
            "dt": 1674075600,
            "temp": 0.88,
            "feels_like": -2.72,
            "pressure": 1003,
            "humidity": 77,
            "dew_point": -3.12,
            "uvi": 0,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 3.34,
            "wind_deg": 214,
            "wind_gust": 9.26,
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "Klarer Himmel",
                "icon": "01n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T22:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464552Z",
          "weather": {
            "dt": 1674079200,
            "temp": 1,
            "feels_like": -2.65,
            "pressure": 1003,
            "humidity": 78,
            "dew_point": -2.73,
            "uvi": 0,
            "clouds": 11,
            "visibility": 10000,
            "wind_speed": 3.43,
            "wind_deg": 216,
            "wind_gust": 9.51,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-18T23:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464562Z",
          "weather": {
            "dt": 1674082800,
            "temp": 1.19,
            "feels_like": -2.35,
            "pressure": 1003,
            "humidity": 78,
            "dew_point": -2.53,
            "uvi": 0,
            "clouds": 26,
            "visibility": 10000,
            "wind_speed": 3.35,
            "wind_deg": 214,
            "wind_gust": 9.03,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T00:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464563Z",
          "weather": {
            "dt": 1674086400,
            "temp": 1.39,
            "feels_like": -2.22,
            "pressure": 1003,
            "humidity": 78,
            "dew_point": -2.33,
            "uvi": 0,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 3.49,
            "wind_deg": 216,
            "wind_gust": 9.44,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T01:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464565Z",
          "weather": {
            "dt": 1674090000,
            "temp": 1.19,
            "feels_like": -2.61,
            "pressure": 1003,
            "humidity": 80,
            "dew_point": -2.28,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.69,
            "wind_deg": 210,
            "wind_gust": 9.57,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T02:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464567Z",
          "weather": {
            "dt": 1674093600,
            "temp": 1.14,
            "feels_like": -2.68,
            "pressure": 1004,
            "humidity": 81,
            "dew_point": -2.17,
            "uvi": 0,
            "clouds": 62,
            "visibility": 10000,
            "wind_speed": 3.71,
            "wind_deg": 215,
            "wind_gust": 9.7,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "Überwiegend bewölkt",
                "icon": "04n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T03:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464569Z",
          "weather": {
            "dt": 1674097200,
            "temp": 1.77,
            "feels_like": -1.97,
            "pressure": 1004,
            "humidity": 78,
            "dew_point": -2.07,
            "uvi": 0,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 3.79,
            "wind_deg": 219,
            "wind_gust": 9.82,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "Überwiegend bewölkt",
                "icon": "04n"
              }
            ],
            "pop": 0.06,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T04:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.946457Z",
          "weather": {
            "dt": 1674100800,
            "temp": 1.28,
            "feels_like": -2.65,
            "pressure": 1004,
            "humidity": 83,
            "dew_point": -1.73,
            "uvi": 0,
            "clouds": 58,
            "visibility": 10000,
            "wind_speed": 3.91,
            "wind_deg": 229,
            "wind_gust": 10.67,
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "Mäßiger Schnee",
                "icon": "13n"
              }
            ],
            "pop": 0.24,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T05:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464571Z",
          "weather": {
            "dt": 1674104400,
            "temp": 1.42,
            "feels_like": -2.71,
            "pressure": 1003,
            "humidity": 89,
            "dew_point": -0.54,
            "uvi": 0,
            "clouds": 66,
            "visibility": 8330,
            "wind_speed": 4.26,
            "wind_deg": 243,
            "wind_gust": 11.05,
            "weather": [
              {
                "id": 601,
                "main": "Snow",
                "description": "Schnee",
                "icon": "13n"
              }
            ],
            "pop": 0.56,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T06:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464573Z",
          "weather": {
            "dt": 1674108000,
            "temp": 1.05,
            "feels_like": -3.21,
            "pressure": 1004,
            "humidity": 96,
            "dew_point": 0.23,
            "uvi": 0,
            "clouds": 71,
            "visibility": 170,
            "wind_speed": 4.34,
            "wind_deg": 242,
            "wind_gust": 12.23,
            "weather": [
              {
                "id": 601,
                "main": "Snow",
                "description": "Schnee",
                "icon": "13n"
              }
            ],
            "pop": 0.69,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T07:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464575Z",
          "weather": {
            "dt": 1674111600,
            "temp": 1.92,
            "feels_like": -2.22,
            "pressure": 1004,
            "humidity": 90,
            "dew_point": 0.07,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.47,
            "wind_deg": 266,
            "wind_gust": 10.27,
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "Mäßiger Schnee",
                "icon": "13n"
              }
            ],
            "pop": 0.68,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T08:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464576Z",
          "weather": {
            "dt": 1674115200,
            "temp": 1.79,
            "feels_like": -2.12,
            "pressure": 1006,
            "humidity": 93,
            "dew_point": 0.39,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 4.05,
            "wind_deg": 274,
            "wind_gust": 8.88,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04d"
              }
            ],
            "pop": 0.67,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T09:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464578Z",
          "weather": {
            "dt": 1674118800,
            "temp": 2.27,
            "feels_like": -1.25,
            "pressure": 1006,
            "humidity": 89,
            "dew_point": 0.35,
            "uvi": 0.22,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.64,
            "wind_deg": 270,
            "wind_gust": 8.22,
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "Mäßiger Schnee",
                "icon": "13d"
              }
            ],
            "pop": 0.61,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T10:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.946458Z",
          "weather": {
            "dt": 1674122400,
            "temp": 2.8,
            "feels_like": -0.45,
            "pressure": 1007,
            "humidity": 86,
            "dew_point": 0.43,
            "uvi": 0.4,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.41,
            "wind_deg": 272,
            "wind_gust": 6.95,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04d"
              }
            ],
            "pop": 0.53,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T11:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464581Z",
          "weather": {
            "dt": 1674126000,
            "temp": 3.54,
            "feels_like": 0.68,
            "pressure": 1007,
            "humidity": 82,
            "dew_point": 0.49,
            "uvi": 0.52,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.09,
            "wind_deg": 267,
            "wind_gust": 6.13,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04d"
              }
            ],
            "pop": 0.53,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T12:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464583Z",
          "weather": {
            "dt": 1674129600,
            "temp": 4.06,
            "feels_like": 1.05,
            "pressure": 1007,
            "humidity": 79,
            "dew_point": 0.37,
            "uvi": 0.53,
            "clouds": 100,
            "visibility": 7958,
            "wind_speed": 3.45,
            "wind_deg": 270,
            "wind_gust": 6.37,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "Leichter Regen",
                "icon": "10d"
              }
            ],
            "pop": 0.53,
            "rain": {
              "1h": 0.13
            }
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T13:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464585Z",
          "weather": {
            "dt": 1674133200,
            "temp": 4.17,
            "feels_like": 1.31,
            "pressure": 1006,
            "humidity": 79,
            "dew_point": 0.46,
            "uvi": 0.42,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.27,
            "wind_deg": 271,
            "wind_gust": 6.52,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "Leichter Regen",
                "icon": "10d"
              }
            ],
            "pop": 0.44,
            "rain": {
              "1h": 0.24
            }
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T14:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464587Z",
          "weather": {
            "dt": 1674136800,
            "temp": 4.15,
            "feels_like": 1.27,
            "pressure": 1007,
            "humidity": 77,
            "dew_point": 0.19,
            "uvi": 0.24,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 3.3,
            "wind_deg": 269,
            "wind_gust": 6.34,
            "weather": [
              {
                "id": 500,
                "main": "Rain",
                "description": "Leichter Regen",
                "icon": "10d"
              }
            ],
            "pop": 0.52,
            "rain": {
              "1h": 0.46
            }
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T15:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464589Z",
          "weather": {
            "dt": 1674140400,
            "temp": 3.32,
            "feels_like": 0.25,
            "pressure": 1007,
            "humidity": 80,
            "dew_point": -0.2,
            "uvi": 0.08,
            "clouds": 70,
            "visibility": 10000,
            "wind_speed": 3.32,
            "wind_deg": 265,
            "wind_gust": 7.07,
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "Mäßiger Schnee",
                "icon": "13d"
              }
            ],
            "pop": 0.57,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T16:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.946459Z",
          "weather": {
            "dt": 1674144000,
            "temp": 1.67,
            "feels_like": -1.15,
            "pressure": 1007,
            "humidity": 85,
            "dew_point": -1.02,
            "uvi": 0,
            "clouds": 58,
            "visibility": 10000,
            "wind_speed": 2.61,
            "wind_deg": 252,
            "wind_gust": 6.4,
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "Mäßiger Schnee",
                "icon": "13n"
              },
              {
                "id": 511,
                "main": "Rain",
                "description": "Eisregen",
                "icon": "13n"
              }
            ],
            "pop": 0.55,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T17:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464594Z",
          "weather": {
            "dt": 1674147600,
            "temp": 1.09,
            "feels_like": -1.22,
            "pressure": 1008,
            "humidity": 84,
            "dew_point": -1.69,
            "uvi": 0,
            "clouds": 60,
            "visibility": 10000,
            "wind_speed": 2.03,
            "wind_deg": 223,
            "wind_gust": 5.14,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "Überwiegend bewölkt",
                "icon": "04n"
              }
            ],
            "pop": 0.59,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T18:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464598Z",
          "weather": {
            "dt": 1674151200,
            "temp": 1.07,
            "feels_like": -0.88,
            "pressure": 1008,
            "humidity": 83,
            "dew_point": -1.87,
            "uvi": 0,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 1.74,
            "wind_deg": 216,
            "wind_gust": 5.01,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "Überwiegend bewölkt",
                "icon": "04n"
              }
            ],
            "pop": 0.61,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T19:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464599Z",
          "weather": {
            "dt": 1674154800,
            "temp": 1.58,
            "feels_like": -0.46,
            "pressure": 1009,
            "humidity": 83,
            "dew_point": -1.5,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.87,
            "wind_deg": 229,
            "wind_gust": 5.67,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0.27,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T20:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464601Z",
          "weather": {
            "dt": 1674158400,
            "temp": 1.6,
            "feels_like": -0.37,
            "pressure": 1009,
            "humidity": 85,
            "dew_point": -1.05,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.82,
            "wind_deg": 218,
            "wind_gust": 4.72,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0.27,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T21:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464603Z",
          "weather": {
            "dt": 1674162000,
            "temp": 1.12,
            "feels_like": -0.85,
            "pressure": 1010,
            "humidity": 88,
            "dew_point": -1.02,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.76,
            "wind_deg": 214,
            "wind_gust": 4.14,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0.2,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T22:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464604Z",
          "weather": {
            "dt": 1674165600,
            "temp": 0.72,
            "feels_like": -0.84,
            "pressure": 1010,
            "humidity": 90,
            "dew_point": -1.14,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.44,
            "wind_deg": 221,
            "wind_gust": 3.05,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0.09,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-19T23:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464606Z",
          "weather": {
            "dt": 1674169200,
            "temp": 0.35,
            "feels_like": 0.35,
            "pressure": 1011,
            "humidity": 90,
            "dew_point": -1.37,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.3,
            "wind_deg": 221,
            "wind_gust": 2.3,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0.05,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T00:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464611Z",
          "weather": {
            "dt": 1674172800,
            "temp": 0,
            "feels_like": 0,
            "pressure": 1011,
            "humidity": 91,
            "dew_point": -1.71,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.11,
            "wind_deg": 229,
            "wind_gust": 2.06,
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "Bedeckt",
                "icon": "04n"
              }
            ],
            "pop": 0.03,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T01:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464612Z",
          "weather": {
            "dt": 1674176400,
            "temp": -0.44,
            "feels_like": -0.44,
            "pressure": 1012,
            "humidity": 91,
            "dew_point": -2.07,
            "uvi": 0,
            "clouds": 71,
            "visibility": 10000,
            "wind_speed": 1,
            "wind_deg": 236,
            "wind_gust": 2.14,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "Überwiegend bewölkt",
                "icon": "04n"
              }
            ],
            "pop": 0.01,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T02:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464614Z",
          "weather": {
            "dt": 1674180000,
            "temp": -0.72,
            "feels_like": -0.72,
            "pressure": 1012,
            "humidity": 91,
            "dew_point": -2.42,
            "uvi": 0,
            "clouds": 49,
            "visibility": 10000,
            "wind_speed": 1.11,
            "wind_deg": 222,
            "wind_gust": 2,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0.01,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T03:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464615Z",
          "weather": {
            "dt": 1674183600,
            "temp": -0.91,
            "feels_like": -0.91,
            "pressure": 1013,
            "humidity": 91,
            "dew_point": -2.66,
            "uvi": 0,
            "clouds": 43,
            "visibility": 10000,
            "wind_speed": 0.98,
            "wind_deg": 230,
            "wind_gust": 1.29,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0.01,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T04:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464617Z",
          "weather": {
            "dt": 1674187200,
            "temp": -1.03,
            "feels_like": -1.03,
            "pressure": 1014,
            "humidity": 90,
            "dew_point": -2.78,
            "uvi": 0,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 0.95,
            "wind_deg": 223,
            "wind_gust": 1.08,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0.01,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T05:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464618Z",
          "weather": {
            "dt": 1674190800,
            "temp": -1.14,
            "feels_like": -1.14,
            "pressure": 1014,
            "humidity": 90,
            "dew_point": -2.96,
            "uvi": 0,
            "clouds": 33,
            "visibility": 10000,
            "wind_speed": 0.92,
            "wind_deg": 202,
            "wind_gust": 1.08,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0.01,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T06:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464619Z",
          "weather": {
            "dt": 1674194400,
            "temp": -1.22,
            "feels_like": -1.22,
            "pressure": 1015,
            "humidity": 90,
            "dew_point": -3.06,
            "uvi": 0,
            "clouds": 30,
            "visibility": 10000,
            "wind_speed": 0.81,
            "wind_deg": 189,
            "wind_gust": 0.82,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T07:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464662Z",
          "weather": {
            "dt": 1674198000,
            "temp": -1.2,
            "feels_like": -1.2,
            "pressure": 1016,
            "humidity": 89,
            "dew_point": -3.12,
            "uvi": 0,
            "clouds": 11,
            "visibility": 10000,
            "wind_speed": 1.25,
            "wind_deg": 178,
            "wind_gust": 1.28,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02n"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T08:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464663Z",
          "weather": {
            "dt": 1674201600,
            "temp": -0.92,
            "feels_like": -0.92,
            "pressure": 1017,
            "humidity": 88,
            "dew_point": -3.05,
            "uvi": 0.08,
            "clouds": 13,
            "visibility": 10000,
            "wind_speed": 1.04,
            "wind_deg": 174,
            "wind_gust": 1.11,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T09:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464665Z",
          "weather": {
            "dt": 1674205200,
            "temp": 0.41,
            "feels_like": 0.41,
            "pressure": 1017,
            "humidity": 82,
            "dew_point": -2.62,
            "uvi": 0.23,
            "clouds": 20,
            "visibility": 10000,
            "wind_speed": 1.15,
            "wind_deg": 172,
            "wind_gust": 1.76,
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "Ein paar Wolken",
                "icon": "02d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T10:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464666Z",
          "weather": {
            "dt": 1674208800,
            "temp": 1.62,
            "feels_like": 1.62,
            "pressure": 1018,
            "humidity": 76,
            "dew_point": -2.42,
            "uvi": 0.4,
            "clouds": 38,
            "visibility": 10000,
            "wind_speed": 1.11,
            "wind_deg": 185,
            "wind_gust": 1.91,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T11:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464667Z",
          "weather": {
            "dt": 1674212400,
            "temp": 2.5,
            "feels_like": 2.5,
            "pressure": 1018,
            "humidity": 73,
            "dew_point": -2.28,
            "uvi": 0.52,
            "clouds": 50,
            "visibility": 10000,
            "wind_speed": 1.04,
            "wind_deg": 203,
            "wind_gust": 2.1,
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "Mäßig bewölkt",
                "icon": "03d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        },
        {
          "longitude": 7.1,
          "latitude": 50.733334,
          "expectedFor": "2023-01-20T12:00:00Z",
          "lastUpdate": "2023-01-18T13:35:57.9464669Z",
          "weather": {
            "dt": 1674216000,
            "temp": 3.14,
            "feels_like": 3.14,
            "pressure": 1018,
            "humidity": 70,
            "dew_point": -2.21,
            "uvi": 0.52,
            "clouds": 58,
            "visibility": 10000,
            "wind_speed": 1.04,
            "wind_deg": 246,
            "wind_gust": 2.84,
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "Überwiegend bewölkt",
                "icon": "04d"
              }
            ],
            "pop": 0,
            "rain": null
          }
        }
      ])
    });

    // return getRequest(`${DATA_AQUISITION_SERVICE_URL}/api/WeatherForecast?latitude=${latitude}&longitude=${longitude}`)
  }
}

export default APIService;
