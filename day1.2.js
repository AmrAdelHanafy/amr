// const fakeAjax = (callback) => {
//     const times =[1000,1500,2000,2500,3000];
//     const min=0;
//     const max =times.length;
//     const randIndex = Math.floor(Math.random()*(max-min))+min ;
//     setTimeout(callback,times[randIndex]) ;
//     callback();
// };


// const fakeAjaxPromise =() =>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve('khaled');
//             // reject()
//         },1000);
//     })
// }
// console.log("before promise")
// fakeAjaxPromise()
// .then((res) =>{
//     console.log('inside promise',res) 
// })
// .then((data) =>{
//     console.log('inside then  ',res) 
// })
// .catch((err)=>{
//     console.log("pffff error")
// })
// console.log("after promise")



function Promise1() {
    return new Promise(function (resolve, reject) {
        console.log("promise 1");
        resolve(true)
    })
}

function Promise2() {
    return new Promise(function (resolve, reject) {
        console.log("promise 2");

        resolve(true)
    })
}

Promise.all([
    Promise1(),
    Promise2()
])
    .then(function () {
        console.log("All promise")
    })