const errorHandlerMiddleware_78 = (err, req, res, next) => {
    console.log('error', err);
    res.status(500).json({ msg: 'there wss an error' });
}

export default errorHandlerMiddleware_78;