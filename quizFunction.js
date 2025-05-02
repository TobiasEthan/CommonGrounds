let answers = ["null","null"];
let CoffeeTypes ={
FamiliaBoliviaOrganic: ["Berry", "Light"],
LosAtlas:["DarkChocolate", "Strong"],
Mariallo:["DarkChocolate","Light"],
Resolut:["Berry","Strong"]

};


document.getElementById("BerryBut").addEventListener("click", function(){answers[0] = "Berry";console.log("Click")});
document.getElementById("DarkChocBut").addEventListener("click", function(){answers[0] = "DarkChocolate"; console.log(answers[0])});




document.getElementById("StrongBut").addEventListener("click", function(){answers[1] = "Strong";console.log("Click")});
document.getElementById("LightBut").addEventListener("click", function(){answers[1] = "Light"; console.log(answers[1])});

document.getElementById("FindCoffeeBut").addEventListener("click", function(){

    Object.entries(CoffeeTypes).forEach(([type, flavors]) => {
       
        if (flavors.includes(answers[0]) && flavors.includes(answers[1])) {
            console.log(`Matching Coffee Type: ${type}`);
            document.getElementById("CoffeeChoice").textContent = `Our Recomendation : ${type}`;
        }
    });




});

