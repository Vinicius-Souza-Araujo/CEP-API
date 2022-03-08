const cep = document.querySelector("#CEP");

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur",(e)=>{
    let procurar = cep.value.replace("-","");
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }
    fetch(`https://viacep.com.br/ws/${procurar}/json/`, options)
        .then((response) => {
            return response.json()
        })
        .then((data) =>{
        showData(data);
        })
        .catch(e => console.log("Erro: "+e,menssage))
         
       
})
