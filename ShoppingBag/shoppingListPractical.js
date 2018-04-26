// //Create constructor functions with properties representing the following “things”:
// Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
// ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)

"use strict";

(function () {

    function Product(name, price, expirationDate) {
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);
        // console.log(this.expirationDate.getTime() + "*");

        this.nasID = (function () {
            return Math.floor(Math.random() * (99999 - 10000) + 10000);
        })();

        this.getInfo = (function () {
            var firstLetter = this.name.charAt(0);
            var lastLetter = this.name.charAt(name.length - 1);
            var productID = firstLetter + lastLetter;
            return productID.toUpperCase() + this.nasID + ", " + this.name + ", " + this.price;
        });
    }

    function ShoppingBag() {

        this.listOfProducts = [];

        this.addProduct = function (product) {
            var date = new Date();
            if (product.expirationDate.getTime() > date.getTime()) {
                this.listOfProducts.push(product);
            }
        }

        this.getMostExpensive = function () {

            var numOfPro = this.listOfProducts.length;
            var highestPriceProduct = this.listOfProducts[0];
            // var priceOfPro = this.listOfProducts[i].price;

            for (var i = 1; i < numOfPro; i++) {

                if (this.listOfProducts[i].price > highestPriceProduct.price) {
                    highestPriceProduct.price = this.listOfProducts[i].price;
                    // console.log(highestPrice);

                }

            }
            return highestPriceProduct;

        }
        this.priceOfAll = function () {
            var totalPrice = 0;
            var numOfPro = this.listOfProducts.length;
            for (var i = 0; i < numOfPro; i++) {

                totalPrice += this.listOfProducts[i].price;

            }
            return totalPrice;
        }

        this.averagePrice = function () {
            var threeDec = this.priceOfAll() / this.listOfProducts.length;
            return threeDec.toFixed(3);
        }
    }

    function PaymentCard(balance, validUntilDate) {
        this.balance = balance.toFixed(2);
        this.validUntilDate = new Date(validUntilDate);
        this.currentTime = new Date();
        this.status = this.validUntilDate > this.currentTime;
    }

    function checkoutAndBuy(newShoppingBag, newCard1) {
        var notification = "";
        if (newCard1.status) {
            if (newShoppingBag.priceOfAll() <= newCard1.balance) {
                notification = "Kupili ste proizvod";
                return notification;
            } else {
                var minus = newShoppingBag.priceOfAll() - newCard1.balance;
                return "Nedostaje vam " + minus.toFixed(2) + " dinara";
            }
        } else{
            return "Istekla kartica!"
        }
    }

    var banana = new Product("banana", 1000.871, "25 Feb 2018");
    var apple = new Product("apple", 78.943, "23 Feb 2018");
    var lemon = new Product("lemon", 134.564, "26 Feb 2018");
    var kiwi = new Product("kiwi", 3.871, "27 Feb 2018");

    var newShoppingBag = new ShoppingBag();

    newShoppingBag.addProduct(banana);
    newShoppingBag.addProduct(apple);
    newShoppingBag.addProduct(lemon);
    newShoppingBag.addProduct(kiwi);

    var newCard1 = new PaymentCard(1000, "25 Feb 2019");
    var newCard2 = new PaymentCard(500, "30 May 2018");

    // console.log(newShop.averagePrice());
    // console.log(newShop.getMostExpensive());
    // console.log(newShop.priceOfAll());

    console.log(checkoutAndBuy(newShoppingBag, newCard1));
    console.log(newShoppingBag.listOfProducts);
    
    // console.log(newCard1.status);
    
    




})();