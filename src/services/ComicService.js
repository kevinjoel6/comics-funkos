import { URL_API_COMICS } from '../constants/http_constants.js';

export default class ComicService {

    static getComics() {
        return fetch(URL_API_COMICS)
            .then(res => res.json())
            .catch(error => error)
    }
}