import { MouseEventHandler } from "react";

export type CardType =
  {
    id: number
    cardnumber: string;
    cardholder: string;
    ccv: string;
    date: number | string;
    vendor: string;
  };

  export type props = {
    id: number
    cardnumber: string;
    cardholder: string;
    ccv: number;
    date: number | string;
    vendor: string;
    color: string;
    backgroundColor: string;
    onClick: MouseEventHandler
};
