import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-appfirst',
  templateUrl: './appfirst.component.html',
  styleUrls: ['./appfirst.component.scss'],
  animations: [
    trigger('animateSlide', [
      state('small', style({
        height: 0
      })),
      state('large', style({
        height: "300px"
      })),
      transition('small <=> large', animate('0.5s linear'))
    ]),
    trigger('animateSlide1', [
      state('small', style({
        height: 0
      })),
      state('large', style({
        height: "780px"
      })),
      transition('small <=> large', animate('0.5s linear'))
    ]),
    trigger('animateSlide2', [
      state('small', style({
        height: 0
      })),
      state('large', style({
        height: "350px"
      })),
      transition('small <=> large', animate('0.5s linear'))
    ]),
    trigger('animateSlide3', [
      state('small', style({
        height: 0
      })),
      state('large', style({
        height: "200px"
      })),
      transition('small <=> large', animate('0.5s linear'))
    ]),
    //rotate
    trigger('rotate', [
      state('nomal', style({
        transform: 'rotate(0)'
      })),
      state('Rotate', style({
        transform: 'rotate(180deg)'
      })),
      transition('nomal <=> Rotate', animate('0.3s linear'))
    ]),
    //change background
    trigger('changeBG', [
      state('bgWhite', style({
        background: 'white'
      })),
      state('bgChange', style({
        background: '#DDDDDD'
      })),
      transition('bgWhite <=> bgChange', animate('0.3s linear'))
    ])

  ]
})
export class AppfirstComponent implements OnInit {
  public stateOpen: string = 'small';
  public stateRotate: string = 'nomal';
  public stateChangeBG: string = 'bgWhite';
  public stateOpen1: string = 'small';
  public stateRotate1: string = 'nomal';
  public stateChangeBG1: string = 'bgWhite';
  public stateOpen2: string = 'small';
  public stateRotate2: string = 'nomal';
  public stateChangeBG2: string = 'bgWhite';
  public stateOpen3: string = 'small';
  public stateRotate3: string = 'nomal';
  public stateChangeBG3: string = 'bgWhite';
  public stateOpen4: string = 'small';
  public stateRotate4: string = 'nomal';
  public stateChangeBG4: string = 'bgWhite';

  //reactive form + metrial;
  public app: FormGroup;
  public nameApp: FormControl;
  public nameDeveloper: FormControl;
  public img: FormControl;
  public nameTitle: FormControl;
  public nameWebsite: FormControl;
  public nameDiscription: FormControl;
  public option: FormControl;
  public btnWebsite: FormControl;

  public appStore: FormGroup;
  public nameApple: FormControl;
  public nameAmazon: FormControl;
  public searchPlay: FormControl;
  public namePlay: FormControl;
  public searchApp: FormControl;

  public screen: FormGroup;
  public change: FormControl;

  public AdvancedOption:FormGroup;
  public label:FormControl;
  constructor() { }
  clickMe() {
    this.stateOpen = (this.stateOpen === 'small' ? 'large' : 'small');
    this.stateRotate = (this.stateRotate === 'nomal' ? 'Rotate' : 'nomal');
    this.stateChangeBG = (this.stateChangeBG === 'bgWhite' ? 'bgChange' : 'bgWhite');
  }
  clickMe1() {
    this.stateOpen1 = (this.stateOpen1 === 'small' ? 'large' : 'small');
    this.stateRotate1 = (this.stateRotate1 === 'nomal' ? 'Rotate' : 'nomal');
    this.stateChangeBG1 = (this.stateChangeBG1 === 'bgWhite' ? 'bgChange' : 'bgWhite');
  }
  clickMe2() {
    this.stateOpen2 = (this.stateOpen2 === 'small' ? 'large' : 'small');
    this.stateRotate2 = (this.stateRotate2 === 'nomal' ? 'Rotate' : 'nomal');
    this.stateChangeBG2 = (this.stateChangeBG2 === 'bgWhite' ? 'bgChange' : 'bgWhite');
  }
  clickMe3() {
    this.stateOpen3 = (this.stateOpen3 === 'small' ? 'large' : 'small');
    this.stateRotate3 = (this.stateRotate3 === 'nomal' ? 'Rotate' : 'nomal');
    this.stateChangeBG3 = (this.stateChangeBG3 === 'bgWhite' ? 'bgChange' : 'bgWhite');
  }
  clickMe4() {
    this.stateOpen4 = (this.stateOpen4 === 'small' ? 'large' : 'small');
    this.stateRotate4 = (this.stateRotate4 === 'nomal' ? 'Rotate' : 'nomal');
    this.stateChangeBG4 = (this.stateChangeBG4 === 'bgWhite' ? 'bgChange' : 'bgWhite');
  }
  changeName() {
    this.app = new FormGroup({
      nameApp: new FormControl(),
      nameDeveloper: new FormControl(),
      img: new FormControl(),
      nameTitle: new FormControl(),
      nameWebsite: new FormControl(),
      nameDiscription: new FormControl(),
      option: new FormControl(),
      btnWebsite: new FormControl()
    })
  }
  appStoreLink() {
    this.appStore = new FormGroup({
      nameApple: new FormControl(),
      nameAmazon: new FormControl(),
      searchPlay: new FormControl(),
      namePlay: new FormControl(),
      searchApp: new FormControl()
    })
  }
  Screen() {
    this.screen = new FormGroup({
      change: new FormControl()
    })
  }
  Option(){
    this.AdvancedOption = new FormGroup({
      label: new FormControl()
    })
  }
  submitOpen(){
    console.log(this.AdvancedOption.value);
  }
  submitAppStore() {
    console.log(this.appStore.value);
  }
  submit() {
    console.log(this.app.value);
  }
  submitScreen() {
    console.log(this.screen.value);
  }
  ngOnInit() {
    this.changeName();
  }

}
