function car (maker:string , model:string , ...otherfuture:[string,any][]):any{
    let obj:any={
        maker,
        model
    }
    for (let[value,key]of otherfuture){
        obj [value]=key
    }
    return obj
}

let info=car("honda","civic",["colour","blue"],["additional fiture","sunroof"],["max speed",280])
console.log(info)