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
        const queryString = qs.stringify({
            bbox: bbox,
            location: location,
            query: query
        });
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${this.options.version}/branches?${queryString}`
        });
        return axios(requestOptions);
    }
    async getBranchesAsJson(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = qs.stringify({
            bbox: bbox,
            location: location,
            query: query
        });
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${
                this.options.version
            }/branches.json?${queryString}`
        });
        return axios(requestOptions);
    }
    async getBranchesAsGeoJson(
        bbox: string = '',
        location: string = '',
        query: string = ''
    ) {
        const queryString = qs.stringify({
            bbox: bbox,
            location: location,
            query: query
        });
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${
                this.options.version
            }/branches.geojson?${queryString}`
        });
        return axios(requestOptions);
    }
}
