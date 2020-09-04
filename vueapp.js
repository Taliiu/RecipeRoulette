/*const app = require('./app.js')
//console.log(app.loadFile())


const allRecipeIngredients = []

function getIngrediets(recipes){
    recipes.forEach(element => {
        allRecipeIngredients.push(element.content.ingredients);
        console.log(allRecipeIngredients)
        return;
    });
}
getIngrediets(app.loadFile())*/
var vue = new Vue({
    el: '#app',
    data: {
        rotate: false,
        showIngredients: true,
        ingredients: [['some','more', 'ingredients'], ['other', 'ingredients'],['zaza','yaay','lol']],
        methods: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem maiores architecto quos illo ipsum perspiciatis quis, nesciunt tempora provident iste consequuntur mollitia? Quidem asperiores maiores ipsam temporibus expedita doloribus.', 'Some Other text', 'text3'],
        specifiedIngredients: [],
        specifiedMethod: '',
        spinCounter: 0
    },
    watch: {
        spinCounter: function(value) {
            const vm = this;
            if(value == 1) {
                vm.rotate = false;
                vm.spinCounter = 0;
            }
        }
    },
    methods: {
        getIndex: function() {
            return Math.floor(Math.random() * 3);
        },
        getContent: function () {
            this.specifiedIngredients = [];
            this.specifiedMethod = '';
            console.log(this.specifiedIngredients)
            const index = this.getIndex();
            this.specifiedIngredients = this.specifiedIngredients.concat(this.ingredients[index])
            this.specifiedMethod = this.specifiedMethod.concat(this.methods[index])
            
        },
        addCounter: function() {
            const vm = this;
            setTimeout(function(){
                vm.spinCounter += 1;
                console.log(vm.spinCounter)
            },1000)
            
        }  
    }
        
})

