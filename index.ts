import * as crypto from 'crypto'

class Transaction {
  constructor (
    public amount : number,
    public payer : string, // public
    public payee : string // private
  ) {}

  toString() {
    return JSON.stringify(this);
  }
}