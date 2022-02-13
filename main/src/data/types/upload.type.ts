export type SubtitleType = {
  subtitleFilePath: string;
  subtitleLanguage: string;
};

export enum Audience {
  GENERAL,
  PARENTAL_GUIDANCE_SUGGESTED,
  PARENTAL_GUIDANCE,
  RESTRICTED,
  ADULT
}

export enum Status {
  DRAFT,
  PUBLISHED,
  SCHEDULED
}

export type CastType = {
  name: string;
  actorImage: string;
  roleName: string;
};

export interface ILanguageDetailsInfo {
  videoLanguage: string;
  subtitle: SubtitleType[];
}

export interface ICastDetailsInfo {
  useIMDBData: boolean;
  cast: CastType[];
}

export interface ISponsorsInfo {
  name: string;
  sponsorImagePath: string;
}

export interface IUploadBasicInfo {
  title: string;
  description: string;
  directors: string[];
  productionYear: number;
  audience: Audience;
  producers: string[];
  genres: string[];
  imdbLink: string;
}

export interface IMediaDetailsInfo {
  thumbnailImages: string[];
  videoFilePath: string;
}

export interface IUploadInfo {
  id: string;
  basic: IUploadBasicInfo;
  media: IMediaDetailsInfo;
  language: ILanguageDetailsInfo;
  cast: ICastDetailsInfo[];
  sponsors: ISponsorsInfo[];
  status: Status;
}
