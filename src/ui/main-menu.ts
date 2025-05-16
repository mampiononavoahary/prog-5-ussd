
import * as readlineSync from 'readline-sync';
import { Wallet } from "../core/wallet";
import {
  displayMainMenu,
  displayRechargeOptions,
  displayCreditBundleOptions,
  displayMontantRecharger,
  displayPassword,
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
    } catch (error: any) {
      console.log("Erreur:", error.message);
    }

    this.show(); // boucle continue
  }

  private credit() {
    const montantStr = readlineSync.question("Montant à créditer: ");
    this.wallet.credit(parseFloat(montantStr));
    console.log("Crédit réussi !");
  }

  private transfer() {
    const number = readlineSync.question("Numéro du destinataire (10 chiffres): ");
    const amountStr = readlineSync.question("Montant à transférer: ");
    this.wallet.transfer(parseFloat(amountStr), number);
    console.log("Transfert réussi !");
  }

  private creditPourMonNumero() {
    displayRechargeOptions();
    const creditChoix = readlineSync.question("Choisissez le type de recharge: ");
    switch (creditChoix) {
      case "1":
        this.rechargeDirecte();
        break;
      case "2":
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
        // Implémenter si nécessaire
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

  private confirmerPassword(): void {
    displayPassword();
    const password = readlineSync.question("Entrer le password: ", { hideEchoBack: true });

    if (password.length >= 4) {
      console.log("Rechargement effectué !");
    } else {
      console.log("Mot de passe trop court.");
    }
  }
}

