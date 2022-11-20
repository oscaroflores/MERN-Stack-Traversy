// middleware are functions that execute when req is done

// error handler file

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500 // JS Ternary

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // gives us extra info on err
    })
}

module.exports = {
    errorHandler,
}

// condition ? true this happens : else this happens