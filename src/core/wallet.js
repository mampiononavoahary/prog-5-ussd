"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
var Wallet = /** @class */ (function () {
    function Wallet() {
        this.balance = 0;
    }
    Wallet.prototype.getBalance = function () {
        return this.balance;
    };
    Wallet.prototype.credit = function (amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Montant invalide.");
        }
        this.balance += amount;
    };
    Wallet.prototype.transfer = function (amount, number) {
        if (!/^\d{10}$/.test(number)) {
            throw new Error("Num\u00E9ro invalide : ".concat(number));
        }
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Montant invalide.");
        }
        if (amount > this.balance) {
            throw new Error("Solde insuffisant.");
        }
        this.balance -= amount;
    };
    Wallet.prototype.buyBundle = function (type) {
        var prices = { internet: 2000, appels: 1000, sms: 500 };
        var price = prices[type];
        if (this.balance < price) {
            throw new Error("Solde insuffisant pour acheter ce forfait.");
        }
        this.balance -= price;
        return price;
    };
    return Wallet;
}());
exports.Wallet = Wallet;
