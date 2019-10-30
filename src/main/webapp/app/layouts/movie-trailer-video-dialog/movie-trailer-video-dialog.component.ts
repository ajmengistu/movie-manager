import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'jhi-movie-trailer-video-dialog',
  templateUrl: './movie-trailer-video-dialog.component.html',
  styleUrls: ['./movie-trailer-video-dialog.component.scss']
})
export class MovieTrailerVideoDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getMovieVideoTrailer(videoId) {
    const url = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&enablejsapi=1';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
