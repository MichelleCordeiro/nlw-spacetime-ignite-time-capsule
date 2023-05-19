import axios from 'axios'

export const api = axios.create({
  // o android tem dificuldade p trabalhar c localhost, usar o endererço local ipconfig
  baseURL: 'http://192.168.0.199:3333', // Endereço IPv4
  // baseURL: 'http://192.168.0.1:3333', // Gateway Padrão
})
