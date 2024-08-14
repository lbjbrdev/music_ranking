import axios from 'axios';
import { basesUrls } from './baseUrls';

export const api = axios.create({
    baseURL: basesUrls.apiV1,
});