const Client = require('pg').Client
const client = new Client ({
    user: "postgres",
    password: "ifms",
    host: "localhost",
    port: 5432,
    database: "casa"
})

client.connect()
client.query("select * from casa")
.then( results => {
    const  resultado = results.rows
    console.log(resultado);
})

.finally(() => client.end())