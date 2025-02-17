const fs=require('fs');
const write=()=>{
    const data="I am updated data"
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("File Created successfully");
    })
}
write();