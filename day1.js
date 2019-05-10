const fakeAjax = (callback) =>{
 const times =setTimeout(callback,2000)
}

const arrowFunc = () => {
    console.log("callback1");
    fakeAjax ( () => {
        console.log("callback2");
})
}
fakeAjax(arrowFunc)    //in series 

// in parallel 
fakeAjax(()=>{                             
    console.log("callback3")
})

fakeAjax(()=>{
    console.log("callback4")
})
