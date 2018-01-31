import axios from 'axios';
import * as qs from 'querystring';
import { Options } from '../utils/DataSchemas';

export default class Mobility {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getBranches(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = makeQueryString([bbox, location, query]);
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${this.options.version}/branches${queryString}`
        });
        return axios(requestOptions);
    }
    async getBranchesAsJson(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = makeQueryString([bbox, location, query]);
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${this.options.version}/branches.json${queryString}`
        });
        return axios(requestOptions);
    }
    async getBranchesAsGeoJson(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = makeQueryString([bbox, location, query]);
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${
                this.options.version
            }/branches.geojson${queryString}`
        });
        return axios(requestOptions);
    }
}

function makeQueryString(parameters: Array<string>) {
    let queryString = '?';
    const keys = ['bbox', 'location', 'query'];
    for (let index in parameters) {
        if (parameters[index] && parameters[index].length > 0) {
            queryString += keys[index] + '=' + parameters[index];
            queryString += '&';
        }
    }
    queryString = queryString.substring(0, queryString.length - 1);
    return queryString;
}
