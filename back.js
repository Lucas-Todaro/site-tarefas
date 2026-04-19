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
    let div = document.createElement("div")
    div.setAttribute("class", "tarefa")
    let t = document.createElement("span")
    t.innerText = localStorage.getItem(`taf${c}`)
    let inp = document.createElement("input")
    inp.setAttribute("type", "checkbox")
    div.appendChild(t)
    div.appendChild(inp)
    main.appendChild(div)
}