
// creo la struttura per vuejs
const {createApp} = Vue;

createApp({
    data(){
        return {
            newelement: null,
            // creo il mio arrey di oggetti
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
      // aggiungo una funzione per cancellare un elemento della lista
    methods: {
       deletetask(index){
        this.todolist.splice(index, 1);
       },
       // aggiungo una funzione che mi aggiunge l'elemento al dom
       addtask(){
        const object = {
            text: this.newelement,
            done: false
        }
        // pusho nell'arrey
        this.todolist.push(object)
        this.newelement = null;
       }
  }
}).mount('#app');