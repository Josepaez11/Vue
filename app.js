
var app = new Vue({
    el: '#app',
    data: {
      title: 'CONTADOR',
      descripcion: 'AGREGA ITEMS' ,
      num: 0,
      cantidad: 1,
      operacion: 0,
    },
    methods: {
      
        aumentar(){
            this.num += this.cantidad;
            this.operacion = 1;
        },
        decrementar(){
          this.num -= this.cantidad ;
          this.operacion = 2;
          console.log("vue decrementar");
        },
        resetear(){
          this.num = 0;
          this.operacion = 0;
        }
      },
      computed: {
         mostrarTituloOperacion() {
           return this.operacion === 0 || this.num === 0 ?  "OPERACION" : this.operacion === 1 ? " AGREGANDO" : " RESTANDO "
        },
        classObject() {
          return this.operacion === 0 || this.num === 0 ?  "alert alert-primary" : this.operacion === 1 ? "alert alert-success" : "alert alert-danger"
        }
        
      }
  })