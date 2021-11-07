import express from 'express'


const app = express()

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('APP run in', port)
});

import nunjucks from 'nunjucks'
nunjucks.configure("src/views",{
    express: app,
    noCache:true
})

app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

////////////////////////////////////////////

app.get('/',(req, res)=>{
    return res.render("index.html")
})

