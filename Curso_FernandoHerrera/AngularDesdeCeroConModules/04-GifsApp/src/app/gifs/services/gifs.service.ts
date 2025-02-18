import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsListResults: Gif[] = [];

  private _tagsHistory: string[] = [];
  private _apiKey = 'qe4GrLhM5jFGVgH8oq02grpZc7dYMjkn';
  private _url = 'https:api.giphy.com/v1/gifs';

  constructor(private _http: HttpClient) {
    this._loadFromLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this._saveToLocalStorage();
  }

  private _saveToLocalStorage(): void {
    localStorage.setItem('tags', JSON.stringify(this._tagsHistory));
  };

  private _loadFromLocalStorage(): void {
    if (!localStorage.getItem('tags')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('tags')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', tag);

    this._http
      .get<SearchResponse>(`${this._url}/search`, {
        params,
      })
      .subscribe((response) => {
        this.gifsListResults = response.data;
      });
  }
}
