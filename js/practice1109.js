/**
 * Created by Calcious on 11/10/16.
 */
//
// function XO(str) {
//     var checkArray = [];
//     var numO = 0;
//     var numX = 0;
//     checkArray = str.split('');
//     checkArray.forEach(function(element, i){
//         if(checkArray[i] == ("x" || "X")){
//             numX++;
//         } else if(checkArray[i] == ("o" || "O")){
//             numO++;
//         }
//
//     });
//     console.log("This is the state of O " + numO);
//     console.log("This is the state of X " + numX);
//
//     if(numO == numX){
//         return true;
//     }
//     else {
//         return false;
//     }
//
// }


function XO(str) {
    var ex = 0;
    var oh = 0;
    var checkedArray = str.split('');
    for(var i = 0; i <= checkedArray.length; i++){
        if(checkedArray[i] == "o" || "O"){
            oh++;
        } else if(checkedArray[i] == "x" || "X") {
            ex++;
        }
    }
    if(ex == oh){
        return true;
    } else {
        return false;
    }
}