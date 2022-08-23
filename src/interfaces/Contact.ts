import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface Contact {
  address: string[];
  phno: string;
  emails: string[];
}

export interface ContactBlock {
  title: string;
  flipped: boolean;
  data: Contact;
  style: SingleBlockStyle;
}
