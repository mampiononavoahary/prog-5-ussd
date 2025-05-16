
export class Wallet {
  private balance = 0;

  getBalance(): number {
    return this.balance;
  }

  credit(amount: number): void {
    if (amount <= 0 || isNaN(amount)) {
      throw new Error("Montant invalide.");
    }
    this.balance += amount;
  }

  transfer(amount: number, number: string): void {
    if (!/^\d{10}$/.test(number)) {
      throw new Error(`Numéro invalide : ${number}`);
    }
    if (amount <= 0 || isNaN(amount)) {
      throw new Error("Montant invalide.");
    }
    if (amount > this.balance) {
      throw new Error("Solde insuffisant.");
    }

    this.balance -= amount;
  }

  buyBundle(type: "internet" | "appels" | "sms"): number {
    const prices = { internet: 2000, appels: 1000, sms: 500 };
    const price = prices[type];

    if (this.balance < price) {
      throw new Error("Solde insuffisant pour acheter ce forfait.");
    }

    this.balance -= price;
    return price;
  }
}

