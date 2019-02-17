/*
Ben Williams-Van Zant
citpt-175-60
sales app
*/
var config = {
    apiKey: "AIzaSyCKXX7FfDGlqafoPHifEnn0cP5iSb54fX4",
    authDomain: "salesapp-14c06.firebaseapp.com",
    databaseURL: "https://salesapp-14c06.firebaseio.com",
    projectId: "salesapp-14c06",
    storageBucket: "salesapp-14c06.appspot.com",
    messagingSenderId: "232583245746"
  };
firebase.initializeApp(config);

app.service("SalesList", function($firebaseArray){
    //make an entry in firebase data base refferencing salespeople section
    let ref = firebase.database().ref('salespeople');
    this.list = $firebaseArray(ref);
    //in firebase you add with objects so takes each value of salesman
    this.add = function(newListItem){
        newListItem.id = this.generateId();
        this.list.$add({
            ID:newListItem.id,
            Name:newListItem.name,
            Q1:newListItem.q1,
            Q2:newListItem.q2,
            Q3:newListItem.q3,
            Q4:newListItem.q4
        });
        return;
    }
    /*this.remove = function(id){
        for(let i = 0; i<this.list.length; i++){
            if(id == this.list[i].id){
                this.list.splice(i,1);
                break;
            }
        }
        return;
    }*/
    //simple return list statement
    this.get = function(){
        return this.list;
    }
    //simple id generater for salesman to be unique
    this.generateId= function(){
        return 's' + Math.random().toString(36);
    }
});

app.service("ProductsList", function($firebaseArray){
    //make an entry in firebase data base refferencing products section
    let ref = firebase.database().ref('products');
    this.list = $firebaseArray(ref);
    //same add function as salesmans add but with values of product
    this.add = function(newListItem){
        newListItem.id = this.generateId();
        this.list.$add({
            ID:newListItem.id,
            itemName:newListItem.name,
            itemPrice:newListItem.price,
            itemQuantity:newListItem.quantity
        });
        return;
    }
   /* this.remove = function(id){
        for(let i = 0; i<this.list.length; i++){
            if(id == this.list[i].id){
                this.list.FieldValue.delete();
                break;
            }
        }
        return;
    }*/
    //simple list return
    this.get = function(){
        return this.list;
    }
    //id generater to keep products unique
    this.generateId= function(){
        return 'p' + Math.random().toString(36);
    }
});
