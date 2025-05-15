"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
var readlineSync = require("readline-sync");
var Wallet_1 = require("../core/Wallet");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.wallet = new Wallet_1.Wallet();
    }
    MainMenu.prototype.show = function () {
        this.displayMenu();
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
    MainMenu.prototype.displayMenu = function () {
        console.log("\n--- MVOLA ---");
        console.log("1. Acheter Credit ou Offre Yas");
        console.log("2. Transferer argent(vers toute destination)");
        console.log("3. Mvola Credit ou Epargne");
        console.log("4. Retrait d'argent");
        console.log("5. Paiment Factures & Partenaires");
        console.log("6. Mon compte");
        console.log("7. Recevoir de l'argent");
        console.log("8. Banques et Micro-Finances");
        console.log("0. Quitter");
    };
    MainMenu.prototype.credit = function () {
        var montantStr = readlineSync.question("Montant à créditer: ");
        this.wallet.credit(parseFloat(montantStr));
        console.log("Crédit réussi !");
    };
    MainMenu.prototype.transfer = function () {
        var number = readlineSync.question("Numéro du destinataire (10 chiffres): ");
        var amountStr = readlineSync.question("Montant à transférer: ");
        this.wallet.transfer(parseFloat(amountStr), number);
        console.log("Transfert réussi !");
    };
    MainMenu.prototype.buyBundle = function () {
        console.log("\n1. Internet (2000 Ar)\n2. Appels (1000 Ar)\n3. SMS (500 Ar)");
        var input = readlineSync.question("Choisissez un type: ");
        var type;
        switch (input) {
            case "1":
                type = "internet";
                break;
            case "2":
                type = "appels";
                break;
            case "3":
                type = "sms";
                break;
            default:
                console.log("Option invalide.");
                return;
        }
        var cost = this.wallet.buyBundle(type);
        console.log("Forfait ".concat(type, " achet\u00E9 pour ").concat(cost, " Ar"));
    };
    MainMenu.prototype.unavailableFeature = function () {
        console.log("Cette fonctionnalité n'est pas encore disponible.");
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
