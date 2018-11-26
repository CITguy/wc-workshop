const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const nunjucks = require('nunjucks')
const path = require('path')

const PORT = 3000
const viewsPath = path.join(__dirname, 'src')

let app = express()

// Configure Express App
app.set('case sensitive routing', true)
app.set('json spaces', 2)
app.set('view engine', 'njk')

// Configure Middleware
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(viewsPath, 'assets')))

// Use nunjucks as our view engine
nunjucks.configure(viewsPath, {
    autoescape: true,
    watch: true,
    noCache: true,
    express: app,
})

// Mount Application Routes
app.use('/', require('./routes'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
    let error = req.app.get('env') === 'development' ? err : {}

    res.locals.message = err.message
    res.locals.error = error

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

app.listen(PORT, () => {
    console.log(`Serving http://127.0.0.1:${PORT}`)
    console.log('Use CTRL-C to stop the server.')
})
