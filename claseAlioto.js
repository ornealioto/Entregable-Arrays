class Cafeterias{
    constructor(name, coffee, pastry, price){
        this.Id = coffeeShop.length + 1;
        this.name = name;
        this.coffee = coffee;
        this.pastry = pastry;
        this.price = price;
    }
}

let coffeeShop = [];
coffeeShop.push(new Cafeterias("Baya Negra", "Latte", "Croissant", 1000));
coffeeShop.push(new Cafeterias("Folc", "Flat White", "Ecalir", 750));
coffeeShop.push(new Cafeterias("Weiss", "Capuccino Weiss", "Pain au Chocolat", 700));
coffeeShop.push(new Cafeterias("Sea and Coffe", "Iced Latte", "Scon de Queso", 730));

let selection = Number(prompt("Contamos con la reseña de numerosas cafeterías. Para ver los productos recomendados de cada una, ingrese: \n 1- Baya Negra \n 2- Folc \n 3- Weiss \n 4- Sea and Coffee \n Presione 0 si no desea ver ninguna recomendación."));
let coffeeFind = coffeeShop.find(cafe => cafe.Id === selection);

while(selection != 0){
    switch(selection){
        case 1:
            alert(`Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de ${coffeeFind.price}`)
            break;
        case 2:
            alert(`Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de ${coffeeFind.price}`)
            break;
        case 3:
            alert(`Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de ${coffeeFind.price}`)
            break;
        case 4:
            alert(`Usted eligio la cafetería ${coffeeFind.name}. \n Sus productos mas populares son ${coffeeFind.coffee} y ${coffeeFind.pastry}. \n El valor aproximado es de ${coffeeFind.price}`)
            break;
        
    }
    selection = Number(prompt("Contamos con la reseña de numerosas cafeterías. Para ver los productos recomendados de cada una, ingrese: \n 1- Baya Negra \n 2- Folc \n 3- Weiss \n 4- Sea and Coffee \n Presione 0 si no desea ver ninguna recomendación."));
}

if(selection === 0){
    alert("Muchas gracias por su interes. Sigannos en Instagram para ver reseñas diarias!")
}




