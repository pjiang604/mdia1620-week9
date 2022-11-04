var computer = {brand:"Microsoft", laptop:"Surface Laptop 4", Screen: "13.5\""};
var sentence = "I have the: ";

for(var item in computer){
    if(item== "brand"){
        sentence += computer.brand;
    } else if(item == "laptop"){
        sentence += computer.laptop + ".";
        break;
    } else {
        //
    }

    if(item == "brand") {
        sentence += " ";
    }
}

console.log(sentence);