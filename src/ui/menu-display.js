"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayMainMenu = displayMainMenu;
exports.displayRechargeOptions = displayRechargeOptions;
exports.displayCreditBundleOptions = displayCreditBundleOptions;
exports.displayMontantRecharger = displayMontantRecharger;
exports.displayCodeDeRecharge = displayCodeDeRecharge;
exports.displayPassword = displayPassword;
exports.displayCompte = displayCompte;
exports.displayMvolaEpargneOrCredit = displayMvolaEpargneOrCredit;
function displayMainMenu() {
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
}
function displayRechargeOptions() {
    console.log("1. Recharger directement");
    console.log("2. Code de recharge");
}
function displayCreditBundleOptions() {
    console.log("1. Credit pour mon numero");
    console.log("2. Credit pour autre numero");
    console.log("3. Offre pour mon numero");
    console.log("4. Offre pour autre numero");
}
function displayMontantRecharger() {
    console.log("Entrer le montant");
}
function displayCodeDeRecharge() {
    console.log("Entrer le code de recharge");
}
function displayPassword() {
    console.log("Voulez vous recharger votre compte?.\n Pour confirmer, entrer le code secret");
}
function displayCompte() {
    console.log("1 Consultation du solde");
    console.log("2 Consulter mes 3 derniers transactions");
    console.log("3 Recu par e-mail");
    console.log("4 Mon adresse e-mail");
    console.log("5 Mon repertoire Mvola");
}
function displayMvolaEpargneOrCredit() {
    console.log("1 Mvola Epargne");
    console.log("2 Mvola Credit");
}
