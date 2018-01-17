export function isEmpty(input: any) {
    if (input === null || input === undefined || input === '') return true;
    return false;
}

export function exists(input: any) {
    if (input === null || input === undefined) return false;
    return true;
}
