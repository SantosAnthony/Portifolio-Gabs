let count = 1

document.getElementById("slide1").checked = true


setInterval(function(){
    nextImage()
}, 2000)

function nextImage(){
    count++
    if(count > 9){
        count = 1

    }
   
    document.getElementById("slide"+count).checked = true
}

 function mostrar (){
    document.getElementById("listai").style.display = "block"
    document.getElementById("listai").style.width = "auto"
    document.getElementById("listai").style.height = "auto"

}

function tirar(){
    document.getElementById("listai").style.display = "none"
}



function aparecer(){
    

    if(document.getElementById("trabalhos1").style.display == "none"){
        document.getElementById("didi1").style.display = "none"
        document.getElementById("trabalhos1").style.display = "block"
        document.getElementById("pacotes1").style.display = "none"
        document.getElementById("pacotes1").classList.remove("ocultar")
        setTimeout(function adicionar(){
            document.getElementById("trabalhos1").classList.add("ocultar")
        },500)
        document.getElementById("didi1").classList.remove("ocultar")

    }
}

setTimeout(function adicionar(){
    document.getElementById("didi1").classList.add("ocultar")
},500)


function inicio(){
    if(document.getElementById("didi1").style.display == "none"){
        document.getElementById("trabalhos1").style.display = "none"
        document.getElementById("didi1").style.display = "block"
        document.getElementById("pacotes1").style.display = "none"
        document.getElementById("pacotes1").classList.remove("ocultar")
        setTimeout(function adicionar(){
            document.getElementById("didi1").classList.add("ocultar")
        },500)
    }
}

function sobre(){
    if(document.getElementById("didi1").style.display == "none"){
        document.getElementById("didi1").style.display = "block"
        document.getElementById("trabalhos1").style.display = "none"
        document.getElementById("pacotes1").style.display = "block"
    }
    document.getElementById("trabalhos1").classList.remove("ocultar")
    document.getElementById("didi1").classList.remove("ocultar")
    document.getElementById("pacotes1").classList.remove("ocultar")
    setTimeout(function adicionar(){
        document.getElementById("didi1").classList.add("ocultar")
    },500)
}

function pacotes(){
    if(document.getElementById("pacotes1").style.display == "none"){
        document.getElementById("pacotes1").style.display = "block"
        document.getElementById("didi1").style.display = "none"
        document.getElementById("trabalhos1").style.display = "none"
        document.getElementById("trabalhos1").classList.remove("ocultar")
        document.getElementById("didi1").classList.remove("ocultar")
        setTimeout(function adicionar(){
            document.getElementById("pacotes1").classList.add("ocultar")
        },500)

    }
}


let cu = 1

document.getElementById("si1").checked = true


setInterval(
    function(){
    proxin()
}, 1500)

function proxin(){
    cu++
    if(cu > 4){
        cu = 1

    }
   
    document.getElementById("si" + cu).checked = true
}

let counta = 1

document.getElementById("slid1").checked = true


setInterval(
    function(){
    proximaImagem()
}, 1500)

function proximaImagem(){
    counta++
    if(counta > 4){
        counta = 1

    }
   
    document.getElementById("slid" + counta).checked = true
}

let countan = 1

document.getElementById("sli1").checked = true


setInterval(
    function(){
    proxima()
}, 1500)

function proxima(){
    countan++
    if(countan > 4){
        countan = 1

    }
   
    document.getElementById("sli" + countan).checked = true
}



let co = 1

document.getElementById("sl1").checked = true


setInterval(
    function(){
    proxm()
}, 1500)

function proxm(){
    co++
    if(co > 4){
        co = 1

    }
   
    document.getElementById("sl" + co).checked = true
}





