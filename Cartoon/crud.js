function bd() {
    let data = [
                   {id:0, nome:"John Wick", login:"Wick", senha:"1234", email:"wick@gi.com"},
                   {id:1, nome:"Don Wick", login:"DWick", senha:"1234L", email:"dwick@gi.com"},
                   {id:2, nome:"Sancho Wick", login:"HERO", senha:"1234S", email:"sancho@gi.com"}
               ]

    let json = JSON.stringify(data)

    localStorage.setItem("meubanco", json)
    return json
}

function adicionar() {
    let bd = JSON.parse (localStorage.getItem("meubanco"))

    let ids =date.now()
    let nome = document.querySelector("#nome").value 
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let email = document.querySelector("#email").value

    let cad =  {id:ids, nome:"nome", login:"lg", senha:"sn", email:"email"}
    
    bd.push(cap)

    let json =json.stringify(bd)

    localStorage.setItem("meubanco", json)

    alert("leu" + json)
}

////const dados = bd()

//onsole.log(dados)
