import { SingleBlockStyle } from "./_SingleBlockStyle";

export interface Certificate {
  id: string;
  certificateName: string;
  organizationName: string;
  certificateDate: string;
  certificateLink: string;
}

export interface Certifications {
  title: string;
  data: Certificate[];
  style: SingleBlockStyle;
}
