// Define the structure of the information_site object
export interface InformationSite {
    sitename: string | null;
    short_description: string | null;
    description: string | null;
    keyword: string | null;
    logo: string | null;
    logo2: string | null;
    icon_logo: string | null;
    type_site: string | null;
    is_active: boolean | null;
  }
  
  // Define the structure of the social object
  export interface Social {
    instagram: string | null;
    whatsApp: string | null;
    telegram: string | null;
  }
  
  // Define the structure of the business_information object
  export interface BusinessInformation {
    phone_support: string | null;
    email_support: string | null;
    video_about_us: string | null;
    address: string | null;
    address_2: string | null;
  }
  
  // Define the OptionsStoreState interface representing the Zustand store state
  export interface OptionsStoreState {
    options: {
      information_site: InformationSite;
      social: Social;
      business_information: BusinessInformation;
    };
    isLoading: boolean;
    isError: boolean;
    getOptionsFromApi: () => Promise<void>;
  }
  // types/OptionsData.ts
export interface OptionsData {
  logo: string;
  sitename: string;
  description: string;
  short_description?: string; // Optional field
  phone_support: string;
  email_support: string;
  address: string;
  address_2?: string; // Optional field
  instagram: string;
  whatsApp: string;
  telegram: string;
}
