export class Transaction {
  numeroTransaction: any;
  dateTransaction: any;
  montant: any;

  constructor(
    numeroTransaction: string,
    dateTransaction: string,
    montant: string,
  ) {
    this.numeroTransaction = numeroTransaction;
    this.dateTransaction = dateTransaction;
    this.montant =montant;
  }
}
