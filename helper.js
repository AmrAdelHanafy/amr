var Prom = require('./FSPromise')

const Add = (task) => {
    Prom.read()
    .then((tasks) => {
        tasks.push(task);
        return Prom.write(tasks);
    })
    .then(() => {

    })
    .catch((err) => {
        console.log(err)
    })
}

const List = () => {
    Prom.read()
    .then((tasks) => {
        for (let index = 0; index < tasks.length; index++) {
            console.log( tasks[index]);
            
        }
  
    })
    .catch((err) => {
        console.log(err)
    })


}
module.exports = {
    add: Add,
    list:List
}