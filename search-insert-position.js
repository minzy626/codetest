/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   var status = nums.some(itm=>itm==target)
   if(status){
       return nums.indexOf(target)
   }else{
       nums.push(target);
       nums.sort((a,b)=>a-b)
       return nums.indexOf(target)
   }
};
