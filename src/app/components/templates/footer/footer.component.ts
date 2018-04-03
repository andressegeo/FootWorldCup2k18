import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   fbookUrl : string = "https://www.facebook.com/gPartner.eu";
   googleUrl: string = "https://plus.google.com/100894579649931999251";
   twitterUrl:string = "https://twitter.com/gPartner";
   linkedinUrl: string = "https://www.linkedin.com/company/gpartner";
  constructor() { }

  ngOnInit() {
  }

}
