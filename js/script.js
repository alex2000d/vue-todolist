
// creo la struttura per vuejs
const {createApp} = Vue;

createApp({
    data(){
        return {
             todolist: [
                 {
                     done: true ,
                     text: 'andare a fare la spesa',
                 },
                  {
                     done: false ,
                     text: 'fare l\'esercizio di oggi ',
                 },
                  {
                     done: true ,
                     text: "capire come diventare ricchi da fare schifo",
                 },
                  {
                     done: true ,
                     text: 'investire in cripto',
                 },
                  {
                     done: false ,
                     text: 'guardare un film',
                 }
             ]
        }
    },
  
    methods: {
       deletetask(index){
        this.todolist.splice(index, 1);
       }
  }
}).mount('#app');