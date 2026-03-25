import Crud from './code.js'

//Seleção de tudo... ez
/*
Crud.selectAll(function(autor){
    for(let i=0;autor.length > i;i++){
        console.log("O Id é: " + autor[i].id + ":" + "O nome é: " + autor [i].nome)
    }
})
*/

//seleção por id
/*
Crud.selectByid(11, function(autor){
    console.log("O Id é: " + autor[i].id + ":" + "O nome é: " + autor [i].nome)

})
*/

//Onserir os dados
/*
let livros = {nome: "Antonio Prado", titulo:"Os jovens não sabem", editora:"Abreu", ano:1998}
Crud.insert(livros, function(autor){
    console.log("inerido")

})
*/

//Atualizar os dados
/*
let livros = {id:3, nome: "Mané", titulo:"Malandro do samba", editora:"Abreu", ano:2003}
Crud.update(livros, function(autor){
    console.log("inerido")

})
*/

//Apagar dados
/*
let livros = {id:2}
Crud.deleteById(livros, function(autor){
    console.log("APAGADO!!!!!!!!!!!!!!!!!!")
})
*/