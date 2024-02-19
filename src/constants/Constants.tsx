export const addedCards = [
  {
    id: 1,
    cardNumber: "XXXX XXXX XXXX XXXX",
    firstName: "FIRSTNAME",
    lastName: "LASTNAME",
    ccv: "CCV",
    expirationDate: "MM/YY",
    vendor: "IMG",
  },
  {
    id: 2,
    cardNumber: "XXXX XXXX XXXX XXXX",
    firstName: "FIRSTNAME",
    lastName: "LASTNAME",
    ccv: "CCV",
    expirationDate: "MM/YY",
    vendor: "IMG",
  },
];

export type Card = [
  {
    cardnumber: string;
    cardholder: string;
    ccv: string;
    date: number | string;
    vendor: string;
  }
];
