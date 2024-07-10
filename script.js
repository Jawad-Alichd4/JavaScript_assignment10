// program 6
// var arr = [];
// for (var i = 0; i < 5; i++)
//     {
//         arr[i] = +prompt("enter array element");
//     }
//     var smallest = arr[0];
//     for (var i = 0; i < arr.length; i++)
//         {
//             if(arr[i] < smallest)
//                 { 
//                     smallest = arr[i];
//                 }

//         }
//     console.log(smallest);
     
// ============================================================================
// program 7  celcius to fehrenheit 
 
// var temperatureInCelcius = +prompt("enter temperature in celcius");
// var temperatureInFehrenheit = ((9/5) * temperatureInCelcius) + 32;
// console.log(temperatureInFehrenheit);

// ==============================================================================

// program 8 fehrenheit to celcius 
// var tinF = +prompt("enter temperature in fehrenheit");
// var tinC = (tinF - 32) * 5/9;
// console.log(tinC);
// =================================================================================

// program 9 
// var arr1 = [];
// for (var i = 0; i < 5; i++)
//     {
//     arr1[i] = +prompt("enter array element :")    
//     }
//     var reverseArray = [];
//     for (var i = arr1.length - 1; i >= 0; i--)
//         {
//             reverseArray = reverseArray + arr1[i];
//         }
//     console.log( "the original array is " + arr1);
//     console.log( "the reverse of array is " + reverseArray);

// program 10
var arr2 = [];
for (var i = 0; i < 5; i++)
        {
        arr2[i] = +prompt("enter array element :")    
        }

var summ = 0;
var avg = 0;
for (var i = 0; i < arr2.length; i++)
    {
        summ = summ + arr2[i];
    }
console.log("the sum is " + summ)
avg = summ / arr2.length; 
 
console.log("the average of the total numbers " + avg);