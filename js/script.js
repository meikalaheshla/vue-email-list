let root = new Vue({
    el: '#root',
    data: {
        mails: [],
        endpoint: 'https://flynn.boolean.careers/exercises/api/random/mail',

    },
    methods: {
    }, created() {
        for (i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {

                    this.mails.push(res.data.response)

                    // CONDIZIONE PER FAR COMPARIRE L ARRAY DELLE MAIL SOLO QUANDO SONO STATI GENERATI TUTTI E 10 

                    if (this.mails.length < 10) return;
                    console.log(this.mails)
                })
        }
    }

})