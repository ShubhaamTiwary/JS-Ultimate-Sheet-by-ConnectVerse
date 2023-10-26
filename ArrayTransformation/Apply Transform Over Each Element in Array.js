/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const ans=[];
    // arr -> ele => updated element 
    for(let i=0;i<arr.length;i++){
        const updatedElement=fn(arr[i],i);
        ans.push(updatedElement);
    }
    return ans;
};