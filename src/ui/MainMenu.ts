
import * as readlineSync from 'readline-sync';
import { Wallet } from "../core/Wallet";

export class MainMenu {
  private wallet = new Wallet();

  show(): void {
    this.displayMenu();

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

  private displayMenu() {
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

  private buyBundle() {
    console.log("\n1. Internet (2000 Ar)\n2. Appels (1000 Ar)\n3. SMS (500 Ar)");
    const input = readlineSync.question("Choisissez un type: ");
    let type: "internet" | "appels" | "sms";

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

    const cost = this.wallet.buyBundle(type);
    console.log(`Forfait ${type} acheté pour ${cost} Ar`);
  }

  private unavailableFeature() {
    console.log("Cette fonctionnalité n'est pas encore disponible.");
  }
}

