import ConectDB from './conexao.js'

export default class Crud {

//Consulta geral

    static selectAll(callback){
        let connection = ConectDB.connect()
        let sql = "select id, nome, titulo, editora, ano from autor"
        let query = connection.query(sql, function(error, results, fields){
            if(error) throw error
            callback(results)
        })
        connection.end()

    }
    //consulta por id
    static selectByid(id, callback){
        let connection =  ConectDB.connect()
        let sql = "select * from autor where id = ?"
        let query = connection.query(sql, id, function(error, results, fields){
        if(error) throw error
        callback(results)
        })
        connection.end()
    }

    //inserir dados
    static insert(livros, callback){
        let connection = ConectDB.connect()
        let sql = "insert into autor set ?"
        let query = connection.query(sql, livros, function(error, results, fields){
            livros.id = results.insertId
            if(error) throw error
            callback(livros)
        })
            connection.end()

    }

    //atualizar
    static update(livros, callback){
        let connection = ConectDB.connect()
        let sql = "update autor set ? where id = ?"
        let id = livros.id
        let query = connection.query(sql, [livros,id], function(error, results, field){
            if(error) throw error
            callback(livros)

        })
    }

    //ERISE111!!!!11!
    static deleteById(livros, callback){
        let connection = ConectDB.connect()
        let sql = "delete from autor where id = ?"
        let id = livros.id
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw error
            callback(livros)
        })
            connection.end()
    }
}//FECHAR CLASSE!!!!!!!

