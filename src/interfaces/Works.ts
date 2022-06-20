export interface Work {
  id: string;
  workDetails: string[];
  workOrganizationName: string;
  workDuration: string;
}

export interface Works {
  title: string;
  data: Work[];
}
