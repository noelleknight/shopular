(function() {
  'use strict';

  angular
  .module('shopular', [])
  .controller('ShopInvController', ShopInvController);

  ShopInvController.$inject = ["storeItems"];

  function ShopInvController(storeItems) {
    this.items = storeItems.data;
    this.error = "";
    this.tax = 0.05;

    this.newItem = {
      name: "",
      price: "",
      quantity: "",
      color: "",
      discount:""
    };

    this.save = function saveItem(form) {
      if (form.$valid) {
        this.items.push(this.newItem);
        storeItems.save(this.items);
        this.newItem = {};
        form.$setPristine();
        form.$setUntouched();
        this.error = "";
      } else {
        this.error = 'Please enter valid inputs.';
      }
    };
  }

})();
