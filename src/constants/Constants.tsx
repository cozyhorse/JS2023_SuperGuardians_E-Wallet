import { MouseEventHandler } from "react";

export interface props {
    id: number
    cardnumber: string;
    cardholder: string;
    ccv: string | number;
    date: number | string;
    vendor: string;
    color: string;
    backgroundColor: string;
    onClick?: MouseEventHandler
}


export const inactive_card = {
    id: -1,
    cardnumber: "",
    cardholder: "",
    date: "",
    vendor: "",
    ccv: "",
    color: "",
    backgroundColor: ""
  };