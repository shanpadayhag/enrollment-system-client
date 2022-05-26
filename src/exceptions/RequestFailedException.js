class RequestFailedException extends Error {
    statusCode;

    constructor(message = 'Something went wrong', statusCode = 500) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export default RequestFailedException;