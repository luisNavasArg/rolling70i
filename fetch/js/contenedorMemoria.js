class Crud {
    static id=1;
    constructor(my_var){
        this.my_var=my_var;
        this.array=[];
    }
    //create
    create(newObj){
        newObj.id=this.my_id();
        this.array=[...this.array,newObj];

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
    }
    //delete

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
let usuarios = new Crud("usuarios");
let misPeliculas = new Crud("misPeliculas");


