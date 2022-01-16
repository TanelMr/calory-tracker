// Storage controller


//Item controller
const ItemCtrl = (function(){
    //Item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this. calories = calories;
    }
    //Data structure
    const data = {
        items: [
            {}
        ],
        total: 0
    }
    return {
        logData: function(){
            return data;
        }
    }
    })();





//UI controller
const UICtrl = (function(){

})();

//app controller
const App = (function(ItemCtrl, UICtrl){
    return {
        init: function(){
            console.log("Initializing app");
        }
    }
})(ItemCtrl, UICtrl);

//Initialize App
App.init();