new Vue({

el:"#app",
data(){
    return{
        tasklist:[],
        task:"",
        color:""
    }
},
methods:{
    /*add task function*/
    addTask: function(){
        if(this.task !=""){
            this.taskList.push(this.task);
            this.task = "";
            this.color ="#fff";
        }else{
            this.color = "#e74c3c"
        }

    },
    /*add task function*/
    removeTask:function(index){
        this.taskList.splice(index, 1);
    }
},


}) 