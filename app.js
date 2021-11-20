
//Coletando dados do DOM
const cep= document.querySelector("#cep")

//Declarando funções de manipulação dos campos
const verRetorno = (retorno) => {
    for(const campo in retorno){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = retorno[campo]
        }
    }
}

//Criando uma ação de API com base em evento
cep.addEventListener("blur", (event)=>{

    if(cep.value.length >= 8){

        let cepCorrigido= cep.value.replace("-","")

        //as configurações do acesso à API
        const option={
            method:'GET',
            mode: 'cors',
            cache: 'default'
        }

        // O acesso a API
        fetch(`https://viacep.com.br/ws/${cepCorrigido}/json/`, option)
        
        //Tratando a promisse da API e chamando a função para auto-preencher
        .then(retorno =>{retorno.json()
            .then(retorno => {verRetorno(retorno)
            })
        })
        .catch((event) => console.log("Deu erro: " + event.message ))
    }   
})

//limpando todos os campos para uma nova busca
cep.addEventListener("blur", (event)=>{
    if(cep.value == ""){
        let formulario = document.querySelectorAll(".form-control")
        for (const i in formulario){
        formulario[i].value = ""
        }   
        
    }
})


