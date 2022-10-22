document.addEventListener('DOMContentLoaded', ()=>{
    const cep = document.getElementById('cep')

    cep.addEventListener('focusout', ()=>{
        let search = cep.value.replace("-", "")
        if(search.length != 8){

        }else{
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            }


            fetch(`https://viacep.com.br/ws/${search}/json`, options)
            .then((response) => { response.json()
                .then((response)=> setData(response))
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err));


        }
    })

    function setData(dados){
        const inputs = document.querySelectorAll('input.control')
        if(dados['erro'] == true){
            alert("O CPF digitado é invalido!")
            inputs.forEach((input) => {
                if(input.id == 'cep'){
                }else{
                    input.value = '';
                }
            });
        }else{
            const inputs = document.querySelectorAll('input.control')
            inputs.forEach((input) => {
                input.value = dados[input.id]
            });
        }
    }


});