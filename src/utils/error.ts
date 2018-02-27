const noResponseError = (error: any) => {
    return {
        message: error.message,
        code: error.code
    };
};

export default noResponseError;
