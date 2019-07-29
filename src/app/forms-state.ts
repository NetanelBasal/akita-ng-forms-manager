export interface FormsState {
  rawArrays: any;
  array: string[];
  single: string;
  settings: {
    minPrice: number;
  };
  contact: {
    name: string;
  };
  config: {
    someBoolean: boolean;
    skills: string[];
    minAge: number | null;
  };
  group: {
    phone: {
      number: number;
      prefix: number;
    };
    email: string;
  };
}
