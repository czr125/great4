const cep = document.querySelector("#cep")

const showData = (result)=>{
  for(const campo in result){
      if(document.querySelector("#"+campo)){
          document.querySelector('#'+campo).value = result[campo]

      }
  }
}

submit.onclick = function(){
  let search = cep.value.replace("-","")
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response =>{ response.json()
    .then( data => showData(data)) 
  })
  .catch(e => showData('ERROR'+ e,message))

}

limpar.onclick = function(){
    document.getElementById("cep").value = null;
    document.getElementById("logradouro").value = null;
    document.getElementById("uf").value = null;
    document.getElementById("ddd").value = null;
    document.getElementById("valor-frete").value = null;
}

verificar.onclick = function(){
    if(document.getElementById("uf").value == 'PA'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'AM'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'AC'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'RO'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'RR'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'TO'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'AP'){
      window.alert("O frete é de R$20,00");
    } else if(document.getElementById("uf").value == 'MA'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'PI'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'CE'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'RN'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'PB'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'PE'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'AL'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'SE'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'BA'){
      window.alert("O frete é de R$15,00");
    } else if(document.getElementById("uf").value == 'MT'){
      window.alert("O frete é de R$10,00");
    } else if(document.getElementById("uf").value == 'GO'){
      window.alert("O frete é de R$10,00");
    } else if(document.getElementById("uf").value == 'DF'){
      window.alert("O frete é de R$10,00");
    } else if(document.getElementById("uf").value == 'MS'){
      window.alert("O frete é de R$10,00");
    } else if(document.getElementById("uf").value == 'MG'){
      window.alert("O frete é grátis");
    } else if(document.getElementById("uf").value == 'ES'){
      window.alert("O frete é grátis");
    } else if(document.getElementById("uf").value == 'RJ'){
      window.alert("O frete é grátis");
    } else if(document.getElementById("uf").value == 'SP'){
      window.alert("O frete é grátis");
    } else if(document.getElementById("uf").value == 'PR'){
      window.alert("O frete é grátis");
    } else if(document.getElementById("uf").value == 'SC'){
      window.alert("O frete é grátis");
    } else if(document.getElementById("uf").value == 'RS'){
      window.alert("O frete é grátis");
    }
}