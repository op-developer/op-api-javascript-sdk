import { Options } from './DataSchemas';

function copyObject(input: object) {
    let newObject: any = Object.assign({}, input);
    return newObject;
}

export function modifyOptions(
    options: Options,
    method: String,
    uri: String,
    data?: object
) {
    let requestOptions = copyObject(options);
    requestOptions['url'] = uri;
    requestOptions['method'] = method;
    requestOptions['data'] = data;
    return requestOptions;
}
