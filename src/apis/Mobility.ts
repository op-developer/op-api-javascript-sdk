import axios from 'axios';

import { Options } from '../utils/DataSchemas';

export default class Mobility {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    async getBranches() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${this.options.version}/branches`
        });
        return axios(requestOptions);
    }
    async getBranchesAsJson() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${this.options.version}/branches.json`
        });
        return axios(requestOptions);
    }
    async getBranchesAsGeoJson() {
        const requestOptions = Object.assign({}, this.options, {
            method: 'GET',
            url: `/mobility/${this.options.version}/branches.geojson`
        });
        return axios(requestOptions);
    }
}
