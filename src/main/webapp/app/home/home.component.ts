import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, AccountService, Account } from 'app/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MovieTrailerVideoDialogComponent } from 'app/layouts/movie-trailer-video-dialog/movie-trailer-video-dialog.component';
import { MoviesService } from '../core/api/themovie-db/movies.service';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  account: Account;
  modalRef: NgbModalRef;
  popularMovies;

  rowHeight = '1.5:2';
  cols = 8;
  opened = true;
  gutterSize = 9;
  hasBackdrop = false;
  mode = 'side';

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private moviesService: MoviesService
  ) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
          this.opened = false;
          this.rowHeight = '2:1';
          this.mode = 'side';
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 2;
          this.opened = true;
          this.rowHeight = '1.5:2';
          this.mode = 'side';
          this.hasBackdrop = false;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 3;
          this.opened = true;
          this.rowHeight = '1.5:2';
          this.mode = 'side';
          this.hasBackdrop = false;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 6;
          this.opened = true;
          this.rowHeight = '1.5:2';
          this.mode = 'side';
          this.hasBackdrop = false;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = 8;
          this.opened = true;
          this.rowHeight = '1.5:2';
          this.hasBackdrop = false;
        }
      });
  }

  // Open Movie video trailer dialog
  openDialog(movieId: number) {
    this.moviesService.getVideos(movieId).subscribe(videos => {
      // From the list of videos for movieId, find the trailer video on YouTube
      const video = videos.results.find(element => {
        return element.site === 'YouTube' && element.type === 'Trailer';
      });
      // Show the video trailer in the pop-up dialog
      this.dialog.open(MovieTrailerVideoDialogComponent, {
        width: '90%',
        height: '95%',
        autoFocus: false,
        panelClass: 'remove-dialog-container',
        data: { videoId: video.key }
      });
    });
  }

  openSideNav() {
    this.hasBackdrop = true;
    this.opened = true;
    this.mode = 'over';
  }
  closeSideNav() {
    this.mode = 'side';
    this.hasBackdrop = false;
    this.opened = false;
  }
  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    this.moviesService.getPopularMovies().subscribe(result => {
      this.popularMovies = result.results;
    });
  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }
}
