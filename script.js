function verificar(){
        var nome = document.getElementById('nome') 
        var res = document.getElementById('res')
        if(nome.value.length == 0){
            res.innerHTML = `O nome não pode ficar vazio`
            
        } if(sobrenome.value.length == 0){
            res_1.innerHTML = `O sobrenome não pode ficar vazio`
        } if(email.value.length == 0){
            res_2.innerHTML = `O email não pode ficar vazio`
        } if(senha.value.length == 0){
            res_3.innerHTML = `A senha não pode ficar vazia`
        }
    }
