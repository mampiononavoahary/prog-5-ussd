"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
var Wallet = /** @class */ (function () {
    function Wallet() {
        this.balance = 0;
        this.offers = [];
    }
    Wallet.prototype.getBalance = function () {
        return this.balance;
    };
    Wallet.prototype.getOffers = function () {
        return this.offers;
    };
    Wallet.prototype.credit = function (amount) {
        if (!this.isValidAmount(amount)) {
            throw new Error("Montant invalide.");
        }
        this.balance += amount;
    };
    Wallet.prototype.transfer = function (amount, recipientNumber) {
        if (!this.isValidPhoneNumber(recipientNumber)) {
            throw new Error("Num\u00E9ro invalide : ".concat(recipientNumber));
        }
        if (!this.isValidAmount(amount)) {
            throw new Error("Montant invalide.");
        }
        if (amount > this.balance) {
            throw new Error("Solde insuffisant.");
        }
        this.balance -= amount;
        console.log("Transfert de ".concat(amount, " Ar vers ").concat(recipientNumber, " effectu\u00E9."));
    };
    Wallet.prototype.buyBundle = function (type) {
        var prices = {
            internet: 2000,
            appels: 1000,
            sms: 500,
        };
        var price = prices[type];
        if (this.balance < price) {
            throw new Error("Solde insuffisant pour acheter ce forfait.");
        }
        this.balance -= price;
        // Enregistrer l'offre achetée
        var bundle = {
            type: type,
            date: new Date(),
            price: price,
        };
        this.offers.push(bundle);
        return price;
    };
    Wallet.prototype.isValidAmount = function (amount) {
        return !isNaN(amount) && amount > 0;
    };
    Wallet.prototype.isValidPhoneNumber = function (number) {
        var regex = /^\d{10}$/;
        if (!regex.test(number))
            return false;
        var prefix = number.substring(0, 3);
        return Wallet.validPrefixes.includes(prefix);
    };
    Wallet.validPrefixes = ["034", "033", "032", "038", "037"];
    return Wallet;
}());
exports.Wallet = Wallet;
