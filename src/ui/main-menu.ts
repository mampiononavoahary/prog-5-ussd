
import * as readlineSync from 'readline-sync';
import { Wallet } from "../core/wallet";
import {
  displayMainMenu,
  displayRechargeOptions,
  displayCreditBundleOptions,
  displayMontantRecharger,
  displayPassword,
  displayCodeDeRecharge,
} from "../ui/menu-display";

export class MainMenu {
  private wallet = new Wallet();

  show(): void {
    displayMainMenu();

    const choice = readlineSync.question("Choisissez une option: ");

    try {

      switch (choice) {
        case "1":
          this.buyBundle();
          break;
        case "2":
          this.transfer();
          break;
        case "3":
          this.mvolaCreditOuEpargne();
          break;
        case "4":
          this.retraitArgent();
          break;
        case "5":
          this.paimentFacturesEtPartenaires();
          break;
        case "6":
          this.monCompte();
          break;
        case "7":
          this.recevoirArgent();
          break;
        case "8":
          this.banquesEtMicroFinances();
          break;
        case "0":
          console.log("Merci d’avoir utilisé notre service.");
          process.exit(0);
          break;
        default:
          console.log("Option invalide.");
      }

    } catch (error: any) {
      console.log("Erreur:", error.message);
    }

    this.show(); 
  }

  private credit() {
    const montantStr = readlineSync.question("Montant à créditer: ");
    this.wallet.credit(parseFloat(montantStr));
    console.log("Crédit réussi !");
  }

  private creditPourMonNumero() {
    displayRechargeOptions();
    const creditChoix = readlineSync.question("Choisissez le type de recharge: ");
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
  }

  private buyBundle() {
    displayCreditBundleOptions();
    const input = readlineSync.question("Choisissez un type: ");

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
  }

  private unavailableFeature() {
    console.log("Cette fonctionnalité n'est pas encore disponible.");
  }
  private rechargeDirecte(): void {
    displayMontantRecharger();
    const montantStr = readlineSync.question("Montant de credit: ");
    const montant = Number(montantStr);

    if (montant > 0) {
      this.confirmerPassword();
    } else {
      console.log("Montant invalide.");
    }
  }
  private codeDeRecharge(): void {
    displayCodeDeRecharge();
    const code = readlineSync.question("Entrez les 15 chiffres: ");
    if ((code.length < 15) || (code.length > 15)) {
      console.log("Code de recharge invalide");
    } else {
      console.log("Rechargement effectué!")
    }
  }

  private confirmerPassword(): void {
    displayPassword();
    const password = readlineSync.question("Entrer le password: ", { hideEchoBack: true });

    if (password.length >= 4) {
      console.log("Rechargement effectué !");
    } else {
      console.log("Mot de passe trop court.");
    }
  }

  private transfer() {
    const numero = readlineSync.question("Numéro du destinataire (10 chiffres, commençant par 032, 033, 034, 037, 038): ");
    const numeroValide = /^(032|033|034|037|038)\d{7}$/.test(numero);

    if (!numeroValide) {
      console.log("Numéro invalide. Veuillez entrer un numéro de 10 chiffres commençant par 032, 033, 034, 037 ou 038.");
      return;
    }

    const montantStr = readlineSync.question("Montant à transférer: ");
    const montant = Number(montantStr);

    if (isNaN(montant) || montant <= 0) {
      console.log("Montant invalide.");
      return;
    }

    this.wallet.transfer(montant, numero);
    console.log(`Transfert de ${montant} Ar vers le ${numero} réussi !`);
  }

  private mvolaCreditOuEpargne(): void {
    console.log("Fonctionnalité 'Mvola Credit ou Epargne' en cours de développement.");
  }

  private retraitArgent(): void {
    console.log("Fonctionnalité 'Retrait d'argent' en cours de développement.");
  }

  private paimentFacturesEtPartenaires(): void {
    console.log("Fonctionnalité 'Paiement Factures & Partenaires' en cours de développement.");
  }

  private monCompte(): void {
    console.log("Fonctionnalité 'Mon compte' en cours de développement.");
  }

  private recevoirArgent(): void {
    console.log("Fonctionnalité 'Recevoir de l'argent' en cours de développement.");
  }

  private banquesEtMicroFinances(): void {
    console.log("Fonctionnalité 'Banques et Micro-Finances' en cours de développement.");
  }
}

