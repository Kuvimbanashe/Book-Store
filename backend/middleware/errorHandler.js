const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack
    });
};

export default errorHandler;