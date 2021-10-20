function fechar() {
    let res = document.getElementById("resultado")
    res.style.visibility = "hidden"
}

function contador() { 
    let ini = Number(document.getElementById("ini").value)
    let fim = Number(document.getElementById("fim").value)
    let inc = Number(document.getElementById("inc").value)

    let res = document.getElementById("resultado")
    let saida = document.getElementById("contagem")
    res.style.visibility = "visible"

    let c = ini
    saida.innerHTML = ``
    while (c <= fim) {
        saida.innerHTML += `${c} &#x1F449; `
        c += inc
    }
    saida.innerHTML += `&#x1F3C1;`
    return false
}