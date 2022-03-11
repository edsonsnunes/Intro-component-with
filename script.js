function verificar(){
        var nome = document.getElementById('nome') 
        var res = document.getElementById('res')
        if(nome.value.length == 0){
            res.innerHTML = `O nome não pode ficar vazio`
            nome.classList.remove("normalinput")
            nome.classList.add("invalidinput")
        }
       
    }
