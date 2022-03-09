import axios from "axios";

const GITHUB_API = 'https://api.github.com/users'

export const api = axios.create({
    baseURL: GITHUB_API
});