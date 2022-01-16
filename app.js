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
            {id: 0, name: "Steak Dinner", calories: 1200}
        ],
        total: 0
    }
    return {
        getItems: function(){
            return data.items
        },
        logData: function(){
            return data;
        }
    }
    })();

//UI controller
const UICtrl = (function(){
    return {
        populateItemList: function (items){
            let html = "";
            items.forEach(function(item){
                html += `<li class="collection-item" id="item ${item.id}"> <strong>${item.name}:</strong> <em>${item.calories} Calories</em> <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a> </li>`
            })
            document.querySelector("#item-list").innerHTML = html;
        }
    }
})();

//app controller
const App = (function(ItemCtrl, UICtrl){
    return {
        init: function(){
            console.log("Initializing app");
            const items = ItemCtrl.getItems();
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);

//Initialize App
App.init();