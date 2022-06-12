function solution(sizes) {
    let h=0;
    let w=0;
    sizes.forEach((itm)=>{
        let temp=0;
        if(itm[0]<itm[1]){
            temp=itm[0];
            itm[0]=itm[1];
            itm[1]=temp;
            }
        })
    sizes.forEach(itm=>{
        if(itm[0]>h)h=itm[0]
        if(itm[1]>w)w=itm[1]
    })
    

    return h*w;
}
