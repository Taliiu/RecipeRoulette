/*function getIngrediets(recipes){
    recipes.forEach(element => {
        allRecipeIngredients.push(element.content.ingredients);
        console.log(allRecipeIngredients)
        return;
    });
}
getIngrediets(recipes)*/

//import recipes from "./recipes.js

const vue = new Vue({
	el: "#app",
	data: {
        start: false,
        rotate: false,
        attachRed: true,
		showIngredients: true,
		specifiedIngredients: [],
        specifiedInstructions: [],
        recipename: '',
        servings:'',
        spinCounter: 0,
        recipes: recipes,
	},
	watch: {
		spinCounter: function (value) {
			const vm = this;
			if (value == 1) {
				vm.rotate = false;
				vm.spinCounter = 0;
			}
		}
    },
	methods: {
		getIndex: function () {
            const num_recipes = this.recipes.length
			return Math.floor(Math.random() * num_recipes);
		},
		getContent: function () {
			this.specifiedIngredients = [];
			this.specifiedMethod = "";
			const index = this.getIndex();
			/*this.specifiedIngredients = this.specifiedIngredients.concat(
                this.ingredients[index]
                this.specifiedMethod.concat(this.methods[index]);
			);*/
            this.specifiedInstructions = this.recipes[index].content.instruction
            this.specifiedIngredients = this.recipes[index].content.ingredients
            this.recipename = this.recipes[index].name
            this.servings = 'Serves: ' + this.recipes[index].servings
		},
		addCounter: function () {
			const vm = this;
			setTimeout(function () {
				vm.spinCounter += 1;
				console.log(vm.spinCounter);
			}, 1000);
        },
        init: function () {
            const vm = this;
            setTimeout(function () {
                vm.start = true;
            },30);
        }
    },
    mounted(){
        this.init();
    }
});
