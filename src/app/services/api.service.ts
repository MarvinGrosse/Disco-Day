import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ItunesApiResponseDto } from '../models/dto/itunes-api-response.dto';
import { ItunesApp } from '../models/itunes-app';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Example Search
  // https://itunes.apple.com/search?term=insta&country=de&lang=de_de&limit=50&media=software

  constructor(private http: HttpClient) {}

  private apiUrl = 'https://itunes.apple.com/search';

  getTestCall(): Observable<ItunesApp[]> {
    return this.http
      .get<ItunesApiResponseDto>(
        `${this.apiUrl}?term=insta&country=de&lang=de_de&limit=50&media=software`
      )
      .pipe(
        retry(2),
        /* catchError((error) => {
          this.errorService.handleHttpError(error);
          return throwError(() => error);
        }), */
        map((res) =>
          res.results.map((dto) => ({
            id: dto.trackId,
            name: dto.trackName,
            bundleId: dto.bundleId,
            iconUrl: dto.artworkUrl100,
            screenshots: dto.screenshotUrls,
            price: dto.formattedPrice,
            genre: dto.primaryGenreName,
            rating: {
              average: dto.averageUserRating,
              count: dto.averageUserRatingForCurrentVersion,
            },
            releaseDate: dto.releaseDate,
            version: dto.version,
            description: dto.description,
            developer: {
              name: dto.artistName,
              url: dto.artistViewUrl,
            },
            trackUrl: dto.trackViewUrl,
          }))
        )
      );
  }
}
