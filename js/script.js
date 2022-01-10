//Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
//BONUS
//Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: '#app',
        data: {
            mailsArray: []
        },
        created() {
            this.randomMails();
        },
        methods: {
            randomMails: function () {
                for (let i = 0; i < 10; i++) {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then((response) => {
                            this.mailsArray.push(response.data.response);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            }
        },
    }
)