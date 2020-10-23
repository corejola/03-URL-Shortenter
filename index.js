const express = require('express');
const connectDB = require('./config/db')
const exphbs = require('express-handlebars');
const Url = require('./models/Url')
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }))

// Connect to Database
connectDB();

app.use(express.json({ extended: false }))

// post request
app.post('/shorten', async (req, res) => {
    await Url.create({
        longUrl: req.body.fullUrl
    })
    res.redirect('/')
})

// define views & get request
app.get('/', async (req, res) => {
    let shortUrls = await Url.find().lean()
    let data = []
    shortUrls.forEach(url => {
        data.push(url)
    })

    res.render("home", { urls: data })
})

// get request based on shortUrl Params & redirect
app.get('/:shortUrl', async (req, res) => {
    const shortenedUrl = await Url.findOne({ shortUrl: req.params.shortUrl })
    if (shortenedUrl == null) return res.sendStatus(404)
    console.log(shortenedUrl)
    shortenedUrl.save()

    res.redirect(shortenedUrl.longUrl)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))