class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
        this.message = message;
    }
}

export default NotFoundError;