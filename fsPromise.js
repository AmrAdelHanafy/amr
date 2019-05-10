const fs =require ('fs');

const fsReadPromise=()=>new Promise((resolve,reject)=>{
    fs.readFile('./Amr.json',{encoding: 'ascii'},(err,res)=>{
        if (err) reject(err);
        resolve(JSON.parse(res))
        })
    });

//        fsReadPromise().then ((res)=>{console.log(res)
//         returnpromise.resolve('hahahaha')
//         })
//         .then((res)=>{
//             console.log(res)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
const fsWritePromise = (tasks) => new Promise ((resolve, reject)=>{
    fs.writeFile('./Amr.json',JSON.stringify(tasks),(err,res)=>{
        if(err) reject (err)
        else resolve (res)
    })
})

module.exports={
    read : fsReadPromise,
    write : fsWritePromise
};
