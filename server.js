const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const routes = require('./routes')
const handle = routes.getRequestHandler(app);

app.prepare().then(
    ()=>{
        const server = express();
        
     /*    server.get('/portfolio/:id',(req,res)=>{
            console.log("serving /portfolio/:id")
            const actualPage = '/portfolio';
            const queryParams = { id: req.params.id }

            app.render(req,res,actualPage,queryParams)
        }) */

        server.get('*',(req,res)=>{
            console.log("serving all of the requests!!")
            return handle(req,res);
        })

        server.use(handle).listen(3000,err=>{
            if(err) throw err
                console.log('> Ready on http://localhost:3000')
        })
    }
).catch(ex=>{
    console.error(ex.stack)
    process.exit(1)
})