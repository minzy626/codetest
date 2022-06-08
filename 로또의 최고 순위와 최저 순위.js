function solution(lottos, win_nums) {
    
    let newLottos =lottos.filter(itm =>!win_nums.includes(itm));//당첨된 번호 걸르기
    let win ={0:6,1:6,2:5,3:4,4:3,5:2,6:1}; 
    let min =lottos.length-newLottos.length?lottos.length-newLottos.length:0;
    
    let max = min;
    let zeroCnt =lottos.filter(itm =>itm===0).length;
     
    max+=zeroCnt;//min에서 0개수만큼 더맞추면 등수올라감
    
    return [win[`${max}`],win[`${min}`]];
}
