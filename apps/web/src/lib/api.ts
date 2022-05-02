import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5678',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  }
})

export const apiLocal = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  }
})
