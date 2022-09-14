/* 1)touch server.js README.md  && npm init -y && npm i nodemon 
   2)pasra la dependencia del nodemon a devDependencie
   3)en scripts : "dev": "nodemon server.js"
   */

   console.log("Inicie node con nodemon")

   const http = require('node:http')
/*    console.log(http) */ // Objeto http

let contadorVisitas = 0

const server = http.createServer((request, response) => {
    console.log(request.url)
    console.log(request.method)
    const {method, url} = request //desestructuro el objeto


    if(method === 'GET'){

        if(url === "/") {
            //console.log(response)
            response.writeHead(200, {'content-type': 'text/html'})
            response.write('<h2>Hola soy un servidor HTTP con NODE</h2>')
            response.write(`<h2>Visitas: ${++contadorVisitas}</h2>`)
            response.end()
        }
        else if(url === "/OTRA-URL") {
            //console.log(response)
            response.writeHead(200, {'content-type': 'text/html'})
            response.write('<h2>Otra url!!!</h2>')
            response.end()
        }   
        else if(url === "/reset") {
            //console.log(response)
            contadorVisitas = 0
            response.writeHead(200, {'content-type': 'text/html'})
            response.write('<h2>Otra url!!!</h2>')
            response.end('<h2>Reset OK!!</h2>')
        }   
        /*     else if(url === "/fecha") {
               //console.log(response)
               response.writeHead(200, {'content-type': 'text/html'})
               response.write(`<h2>La hoira actual es : ${moment().format('dddd')}</h2>`)
               response.end()
           }   */
        else {
            response.writeHead(200, {'content-type': 'text/html'})
            response.end(`<h2>Error 404. Ruta erronea. La url ${url} no fue imp</h2>`)
        }

    }
})

const PORT = 8080

server.listen(PORT, err => {
    if(err) return console.log(`Error en el servidor ${err}`)
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
})
// A este punto el sv ya funciona pero no tiene una respuesta