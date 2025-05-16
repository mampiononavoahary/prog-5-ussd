"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
var readlineSync = require("readline-sync");
var wallet_1 = require("../core/wallet");
var menu_display_1 = require("../ui/menu-display");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.wallet = new wallet_1.Wallet();
    }
    MainMenu.prototype.show = function () {
        (0, menu_display_1.displayMainMenu)();
        var choice = readlineSync.question("Choisissez une option: ");
        try {
            switch (choice) {
                case "1":
                    this.buyBundle();
                    break;
                case "2":
                    this.transfer();
                    break;
                case "3":
                    this.credit();
                    break;
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                    this.unavailableFeature();
                    break;
                case "0":
                    console.log("Merci d’avoir utilisé notre service.");
                    process.exit(0);
                    break;
                default:
                    console.log("Option invalide.");
            }
        }
        catch (error) {
            console.log("Erreur:", error.message);
        }
        this.show(); // boucle continue
    };
    MainMenu.prototype.credit = function () {
        var montantStr = readlineSync.question("Montant à créditer: ");
        this.wallet.credit(parseFloat(montantStr));
        console.log("Crédit réussi !");
    };
    MainMenu.prototype.creditPourMonNumero = function () {
        (0, menu_display_1.displayRechargeOptions)();
        var creditChoix = readlineSync.question("Choisissez le type de recharge: ");
        switch (creditChoix) {
            case "1":
                this.rechargeDirecte();
                break;
            case "2":
                this.codeDeRecharge();
                break;
            default:
                console.log("Merci d’avoir utilisé notre service.");
                process.exit(0);
        }
    };
    MainMenu.prototype.buyBundle = function () {
        (0, menu_display_1.displayCreditBundleOptions)();
        var input = readlineSync.question("Choisissez un type: ");
        switch (input) {
            case "1":
                this.creditPourMonNumero();
                break;
            case "2":
            case "3":
            case "4":
                break;
            default:
                console.log("Option invalide.");
                return;
        }
    };
    MainMenu.prototype.unavailableFeature = function () {
        console.log("Cette fonctionnalité n'est pas encore disponible.");
    };
    MainMenu.prototype.rechargeDirecte = function () {
        (0, menu_display_1.displayMontantRecharger)();
        var montantStr = readlineSync.question("Montant de credit: ");
        var montant = Number(montantStr);
        if (montant > 0) {
            this.confirmerPassword();
        }
        else {
            console.log("Montant invalide.");
        }
    };
    MainMenu.prototype.codeDeRecharge = function () {
        (0, menu_display_1.displayCodeDeRecharge)();
        var code = readlineSync.question("Entrez les 15 chiffres: ");
        if ((code.length < 15) || (code.length > 15)) {
            console.log("Code de recharge invalide");
        }
        else {
            console.log("Rechargement effectué!");
        }
    };
    MainMenu.prototype.confirmerPassword = function () {
        (0, menu_display_1.displayPassword)();
        var password = readlineSync.question("Entrer le password: ", { hideEchoBack: true });
        if (password.length >= 4) {
            console.log("Rechargement effectué !");
        }
        else {
            console.log("Mot de passe trop court.");
        }
    };
    MainMenu.prototype.transfer = function () {
        var numero = readlineSync.question("Numéro du destinataire (10 chiffres, commençant par 032, 033, 034, 037, 038): ");
        var numeroValide = /^(032|033|034|037|038)\d{7}$/.test(numero);
        if (!numeroValide) {
            console.log("Numéro invalide. Veuillez entrer un numéro de 10 chiffres commençant par 032, 033, 034, 037 ou 038.");
            return;
        }
        var montantStr = readlineSync.question("Montant à transférer: ");
        var montant = Number(montantStr);
        if (isNaN(montant) || montant <= 0) {
            console.log("Montant invalide.");
            return;
        }
        this.wallet.transfer(montant, numero);
        console.log("Transfert de ".concat(montant, " Ar vers le ").concat(numero, " r\u00E9ussi !"));
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
