const getStats = (arr)=>{
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce( (sum,n) => sum + n);
  const avg = sum / arr.length;
  return{
    max,
    min,
    sum,
    avg
  }
}

const rev = [3.5,2.6,4.7,3.2];
const stats =getStats(rev);




const math = {
  add      : function(x,y){
    return x + y;
  },
  multiply : function(x,y){
    return x * y;
  }
}