/* Pensar em botão de remover a tarefa e de colocar só como concluida
*/

let main = document.querySelector("main")
function adicionar(){
    if (document.querySelector(".taf").value == ""){
        return
    }
    let tarefa = document.querySelector(".taf").value
    document.querySelector(".taf").value = ""
    let cont = Number(localStorage.getItem("cont")) || 0 
    cont += 1
    localStorage.setItem("cont", cont)
    localStorage.setItem(`taf${cont}`, tarefa)   
    location.reload()
}
for (let c = 1; c <= Number(localStorage.getItem("cont")); c+= 1){
    if (localStorage.getItem(`taf${c}`)){
        let div = document.createElement("div")
        div.setAttribute("class", "tarefa")
        let t = document.createElement("span")
        t.innerText = localStorage.getItem(`taf${c}`)
        let div2 = document.createElement('div')
        div2.setAttribute("class", "botoes")
        let b1 = document.createElement("button")
        let b2 = document.createElement("button")
        b1.setAttribute("class", "check")
        b1.setAttribute("onclick", `concluir(${c}, this)`)
        b2.setAttribute("onclick", `remover(${c}, this)`)
        b1.innerText = "✔"
        b2.innerText = "❌"
        div2.appendChild(b1)
        div2.appendChild(b2) 
        div.appendChild(t)
        div.appendChild(div2)
        main.appendChild(div)
    }  
}
function concluir(id, botao){
    let tarefa = botao.parentElement.parentElement
    let sit = localStorage.getItem(`sit${id}`) || "false"
    if (sit == "false"){
        botao.style.backgroundColor = "#614a3c36"
        botao.style.color = "rgba(0, 128, 0, 0.411)"
        localStorage.setItem(`sit${id}`, true)
        tarefa.style.fontStyle = "italic"
        tarefa.style.color = "green"
    }else{
        botao.style.backgroundColor = "#5e412f1f"
        botao.style.color = "green"
        localStorage.setItem(`sit${id}`, false)
        tarefa.style.fontStyle = "normal"
        tarefa.style.color = "#4d413a"
    } 
}
function remover(id, botao){
    localStorage.removeItem(`taf${id}`)
    let tarefa = botao.parentElement.parentElement
    tarefa.remove()
}