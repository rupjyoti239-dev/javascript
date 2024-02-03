/**
 Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America"
 */

const longestCountry = function(ar){
  let max = "";
  for(let i=0;i<ar.length;i++){
      if(ar[i].length>max.length){
        max = ar[i]
      }
  }
  return max;
}



console.log(longestCountry(["Australia", "Germany", "United States of America"]));