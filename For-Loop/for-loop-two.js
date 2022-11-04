var text="";
var total = 0;

for(var i=0; i<6; i++){
    if(i==3){
        text = "finished";
        break; /**you can put in the break if you want to, but depending on your code it's not always necessary */
    }else if (i==5){
        i++;
    }
    total += i;
}

console.log(text + " at the number " + i + " with a total of " + total);