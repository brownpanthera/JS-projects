const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get appetizers() {

    },

    set appetizers(appetizers) {

    },

    get mains() {

    },

    set mains(mains) {

    },

    get desserts() {

    },

    set desserts(desserts) {

    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.mains,
        }
    },

    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,
        }

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');

        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'chicken wing', 5.25);
menu.addDishToCourse('appetizers', 'boneless chicken', 6);
menu.addDishToCourse('appetizers', 'chicken hiccup', 6.5);

menu.addDishToCourse('mains', 'burger', 12);
menu.addDishToCourse('mains', 'chicken burger', 14);
menu.addDishToCourse('mains', 'chicken biryani', 14.5);

menu.addDishToCourse('desserts', 'Apple pie', 5.25);
menu.addDishToCourse('desserts', 'Almond pie', 5);
menu.addDishToCourse('desserts', 'bake choco cake', 3.5);

const meal = menu.generateRandomMeal();
console.log(meal);