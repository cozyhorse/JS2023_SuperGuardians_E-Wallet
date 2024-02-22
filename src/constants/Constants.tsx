import { MouseEventHandler } from "react";

export interface props {
    id: number
    cardnumber: string;
    cardholder: string;
    ccv: string;
    date: number | string;
    vendor: string;
    color: string;
    backgroundColor: string;
    onClick?: MouseEventHandler
}


export const inactive_card = {
    id: -1, // or any other unique identifier representing an inactive state
    cardnumber: "",
    cardholder: "",
    date: "",
    vendor: "",
    ccv: "",
    color: "",
    backgroundColor: ""
  };