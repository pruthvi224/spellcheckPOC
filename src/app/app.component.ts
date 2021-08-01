import { Component } from '@angular/core';
import { SpellCheckerModule } from 'ngx-spellchecker';
import { SpellCheckerService } from 'ngx-spellchecker';
import { HttpClient } from '@angular/common/http';

declare var JavaScriptSpellCheck: any;
declare var liveSpellInstance: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spellcheck';
  fileURL = "https://raw.githubusercontent.com/JacobSamro/ngx-spellchecker/master/dict/normalized_en-US.dic"

  constructor(private spellCheckerService: SpellCheckerService, private http: HttpClient) {

  }

  test() {
    JavaScriptSpellCheck.SpellCheckInWindow('test');
    // this.http.get(this.fileURL, { responseType: 'text' }).subscribe((res: any) => {
    //
    //   let dictionary = this.spellCheckerService.getDictionary(res)
    //
    //   console.log(dictionary.checkAndSuggest('william'));
    //
    // })

  }
}
