import { URL_API_FUNKOS } from '../constants/http_constants.js';

export default class FigureService {

    static getFigures() {
        return fetch(URL_API_FUNKOS)
            .then(res => res.json())
            .catch(error => error)
    }

    static getFigureById(id) {
        return fetch(`${URL_API_FUNKOS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }
}