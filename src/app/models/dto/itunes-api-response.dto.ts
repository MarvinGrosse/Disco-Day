export interface ItunesApiResponseDto {
  resultCount: number;
  results: ItunesAppDto[];
}

export interface ItunesAppDto {
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl512: string;
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: string[];
  features: string[];
  supportedDevices: string[];
  advisories: string[];
  isGameCenterEnabled: boolean;
  kind: string;
  minimumOsVersion: string;
  trackCensoredName: string;
  trackViewUrl: string;
  sellerUrl: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  formattedPrice: string;
  userRatingCountForCurrentVersion: number;
  trackContentRating: string;
  contentAdvisoryRating: string;
  averageUserRatingForCurrentVersion: number;
  averageUserRating: number;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  primaryGenreName: string;
  primaryGenreId: number;
  releaseDate: string;
  bundleId: string;
  trackId: number;
  trackName: string;
  isVppDeviceBasedLicensingEnabled: boolean;
  genreIds: string[];
  sellerName: string;
  currentVersionReleaseDate: string;
  releaseNotes: string;
  version: string;
  wrapperType: string;
  currency: string;
  description: string;
}
