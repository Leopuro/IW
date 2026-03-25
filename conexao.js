import mysql from 'mysql2'

export default class ConectDB {

    static connect(){

        let connection = mysql.createConnection({
            local: 'localhost',
            use: 'root', 
            password: '',
            database: 'livro',
        })
            connection.connect()
            return connection
    }


    
}