const argv =require("yargs").argv;
const func = require("./helper")

function run (){
    if(argv.operation=="add"){
        console.log("additon");
        const task = {
            id: 1,
            name: argv.task,
            complete: false
        }
        func.add(task);
        
    }
    else if(argv.operation=="edit"){
        console.log("editing");
    }
    else if (argv.operation=="delete"){
        console.log("deleting");

    }else if (argv.operation=="list"){
        console.log("listing");
               
            func.list();
}
}
run ();