function solution(numbers) {
    const num=[0,1,2,3,4,5,6,7,8,9];
    numbers =numbers.sort()
    let result =0;
    let arr = num.filter(itm =>!numbers.includes(itm) ?result+=itm:result)
    
    return result;
}
