import { Options } from '../utils/DataSchemas';
import request from '../utils/request';

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
        return request(
            'GET',
            `/branches/${this.options.version}/branches${queryString}`,
            this.options
        );
    }
    async getBranchesAsJson(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = makeQueryString([bbox, location, query]);
        return request(
            'GET',
            `/branches/${this.options.version}/branches.json${queryString}`,
            this.options
        );
    }
    async getBranchesAsGeoJson(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = makeQueryString([bbox, location, query]);
        return request(
            'GET',
            `/branches/${this.options.version}/branches.geojson${queryString}`,
            this.options
        );
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
