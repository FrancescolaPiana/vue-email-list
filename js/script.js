const {createApp} = Vue;

const app = createApp({
    data(){
       return {
        vals: []
       }
    },

    methods: {
        chiamataApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                console.log(res.data.response);
                this.vals.push(res.data.response);
             })
        },


    },

    computed: {

    },

    mounted(){
       
    },

    created(){
        for (let index = 0; index < 10; index++) {
            this.chiamataApi();            
        }
    },

    beforeCreate(){

    },

});
app.mount('#app')