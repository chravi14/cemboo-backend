import {
  IUploadBasicInfo,
  Audience,
  IMediaDetailsInfo,
  ILanguageDetailsInfo,
  ICastDetailsInfo,
  IUploadInfo,
  Status
} from "../data";

export const BasicDataMock: IUploadBasicInfo = {
  title: "Spider-Man: No Way Home",
  description: `With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.`,
  directors: ["Jon Watts"],
  audience: Audience.GENERAL,
  producers: ["Kevin Feige", "Amy Pascal"],
  genres: ["Action", "Adventure", "Fantasy"],
  productionYear: 2022,
  imdbLink: "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0"
};

export const MediaDetailsMock: IMediaDetailsInfo = {
  thumbnailImages: [
    "https://cemboo-thumbnail-images.s3.amazonaws.com/client1/1d2a99b0-38c2-4466-9b2c-c08d47e155ff.png",
    "https://cemboo-thumbnail-images.s3.amazonaws.com/client1/43e9c1b7-37a8-4ce9-b135-5fd9023fe0d8.png"
  ],
  videoFilePath:
    "https://dmrfa7me8rf79.cloudfront.net/Bunny_Mp4.mp4/AppleHLS1/Bunny_Mp4.m3u8"
};

export const LanguageDetailsMock: ILanguageDetailsInfo = {
  videoLanguage: "English",
  subtitle: [
    {
      subtitleLanguage: "English",
      subtitleFilePath: "https://www.speechpad.com/captions/standard"
    }
  ]
};

export const CastDetailsMock: ICastDetailsInfo = {
  cast: [
    {
      roleName: "Peter Parker",
      name: "Tom Holland",
      actorImage: "https://www.imdb.com/name/nm4043618/?ref_=tt_cl_i_1"
    }
  ],
  useIMDBData: false
};

export const UploadDataMock: IUploadInfo = {
  id: "123",
  basic: BasicDataMock,
  media: MediaDetailsMock,
  language: LanguageDetailsMock,
  sponsors: [
    {
      sponsorImagePath: "https://www.imdb.com/name/nm4043618/?ref_=tt_cl_i_1",
      name: "Sponsor One"
    }
  ],
  cast: [CastDetailsMock],
  status: Status.PUBLISHED
};
