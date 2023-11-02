class Crud {
    static id=1;
    constructor(my_var){
        this.my_var=my_var;
        this.array=JSON.parse(localStorage.getItem(this.my_var)) || [];

    }
    //create
    create(newObj){
        newObj.id=this.my_id();
        this.array=[...this.array,newObj];
        arrayPeliculas=JSON.parse(localStorage.getItem(this.my_var)) || [];
        arrayPeliculas=this.array;
        localStorage.setItem(this.my_var,JSON.stringify(arrayPeliculas))
        console.log(arrayPeliculas);

    }
    //Read
    get(){
  
        return this.array;
    }
    //update
    update(id,newValue){
        this.array.filter((obj,index)=>{
            if (id==obj.id) {
                this.array[index]=newValue;
            }
        })
        arrayPeliculas=JSON.parse(localStorage.getItem(this.my_var)) || [];
        arrayPeliculas=this.array;
        localStorage.setItem(this.my_var,JSON.stringify(arrayPeliculas))

    }
    //delete
    delete(id){
        let newData = this.array.filter((obj)=>{
            if (id!=obj.id) {
                return obj;
            }
        })
        arrayPeliculas=JSON.parse(localStorage.getItem(this.my_var)) || [];
        this.array=newData;
        arrayPeliculas=this.array;
        localStorage.setItem(this.my_var,JSON.stringify(arrayPeliculas))
    }
    my_id(){
        return Crud.id++;
    }
    static verificar_data(item){
        let data = localStorage.getItem(this.my_var);

        if (data !=null) {
            return JSON.parse(data)
        }else{
            localStorage.setItem(item,JSON.stringify([]));
            return []
        }

    }

}
let arrayPeliculas=JSON.parse(localStorage.getItem(this.my_var)) || [];
let usuarios = new Crud("usuarios");
let misPeliculas = new Crud("misPeliculas");
console.log(arrayPeliculas);


