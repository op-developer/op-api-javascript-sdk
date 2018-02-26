const noResponseError = (error: any) => {
    return {
        message: error.message,
        code: error.code,
        syscall: error.syscall,
        host: error.host,
        hostname: error.hostname,
        port: error.port
    };
};

export default noResponseError;
