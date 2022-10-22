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
                .catch((err) => console.log("Deu erro:" + err, message))
            })
            .catch((err) => console.log("Deu erro:" + err, message));


        }
    })

    function setData(dados){
        const inputs = document.querySelectorAll('.control')
        inputs.forEach((input) => {
            input.value = dados[input.id]
        });
    }


});