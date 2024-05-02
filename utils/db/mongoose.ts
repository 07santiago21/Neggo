import { connect, connection } from 'mongoose'

const conn = {
    isConnected: false
}

export async function connectDB(){

    if (conn.isConnected) return;

    const db = await connect('mongodb://localhost/neggo')
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState === 1;
}

connection.on('connected', () => {
    console.log('Mongoose is connected')
})

connection.on('error', (err) => {
    console.log('Mongoose error: ', err)
})