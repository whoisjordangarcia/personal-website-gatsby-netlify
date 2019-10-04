interface IHeader {
  description: string;
  humansText: string;
  imageHeight: string;
  imageType: string;
  imageUrl: string;
  imageWidth: string;
  keywords: string;
  locale: string;
  shortIcon: string;
  siteName: string;
  title: string;
  url: string;
  jobTitle: string;
  twitterHandle: string;
}

interface ISkill {
  name: string;
  list: string[];
}

interface IContribution {
  alt: string;
  isHidden: boolean;
  url: string;
}

interface IPosition {
  role: string;
  from: string;
  to: string;
}

interface IExperience {
  title: string;
  logo: string;
  positions: IPosition[];
}

interface IContact {
  name: string;
  url: string;
}

export interface IData {
  headers: IHeader;
  background: string[];
  skills: ISkill[];
  resume: string;
  contribution: IContribution;
  experience: IExperience[];
  contacts: IContact[];
}
