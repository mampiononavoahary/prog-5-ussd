
type BundleType = "internet" | "appels" | "sms";

interface Bundle {
  type: BundleType;
  date: Date;
  price: number;
}

export class Wallet {
  private balance: number = 0;
  private offers: Bundle[] = [];

  private static readonly validPrefixes = ["034", "033", "032", "038", "037"];

  getBalance(): number {
    return this.balance;
  }

  getOffers(): Bundle[] {
    return this.offers;
  }

  credit(amount: number): void {
    if (!this.isValidAmount(amount)) {
      throw new Error("Montant invalide.");
    }
    this.balance += amount;
  }

  transfer(amount: number, recipientNumber: string): void {
    if (!this.isValidPhoneNumber(recipientNumber)) {
      throw new Error(`Numéro invalide : ${recipientNumber}`);
    }
    if (!this.isValidAmount(amount)) {
      throw new Error("Montant invalide.");
    }
    if (amount > this.balance) {
      throw new Error("Solde insuffisant.");
    }

    this.balance -= amount;
    console.log(`Transfert de ${amount} Ar vers ${recipientNumber} effectué.`);
  }

  buyBundle(type: BundleType): number {
    const prices: Record<BundleType, number> = {
      internet: 2000,
      appels: 1000,
      sms: 500,
    };

    const price = prices[type];

    if (this.balance < price) {
      throw new Error("Solde insuffisant pour acheter ce forfait.");
    }

    this.balance -= price;

    // Enregistrer l'offre achetée
    const bundle: Bundle = {
      type,
      date: new Date(),
      price,
    };

    this.offers.push(bundle);

    return price;
  }

  private isValidAmount(amount: number): boolean {
    return !isNaN(amount) && amount > 0;
  }

  private isValidPhoneNumber(number: string): boolean {
    const regex = /^\d{10}$/;
    if (!regex.test(number)) return false;
    const prefix = number.substring(0, 3);
    return Wallet.validPrefixes.includes(prefix);
  }
}

