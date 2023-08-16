import { Component, OnInit } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private encrypt: EncryptionService) {}
  encrypted =
    'msD1KS9WwKWXmXrnPLGByioLzcA4TDOYIfUPbYUapkDxZbwzzEv43V6UBy4z7p1aPG7dFV3A979O2chTcP23kLjFeQgRUZd5RDGlxih7cONE68ARfmIamCvU1cwA0DJYQFH+BXcnh7VyPP+V7pLyyBOM+8jpX7ttVdedQx2a762bq9C+FseMl4H9TyqjX+FdrirUNA1jnGTZmwqfQ9A3uR1JhWogsYlcw/FS8gmjOxsLHdFd8WWxAD1cH2iz3RU8LnEkhw61SJfKxoJ7CPyWxV9Ju4CnlqiGTfop+jN5zV6XmzPI6Z3xqKfljTy7B1WajO+66HkaEoCcG6lxfg+2gA36vWqBKRjQsg958s/rTk+daspPMRMQXOW2r83ntNs6I2N8wax0mUNbEbBVrm/C2g=';
  obj1 = {
    succeeded: true,
    message: {
      User_Id: 99,
      Name: 'age38',
      Username: 'age38@gmail.com',
      Gender: 'F',
      DateOfBirth: '1985-03-15T00:00:00',
      Mobilenumber: '',
      PhoneNumber: '',
      EmailId: 'age38@gmail.com',
      Address: '',
      PostCode: '',
      Country: '',
      IsVerify: true,
      IsActive: true,
      IsTnCChecked: true,
    },
  };
  ngOnInit() {
    // from local
    const encrypted = this.encrypt.encryptionAES(JSON.stringify(this.obj1));
    console.log(encrypted);
    const decryptedl = this.encrypt.decryptionAES(encrypted);
    console.log(decryptedl);

    // from database
    const decrypted = this.encrypt.decryptionAES(this.encrypted);
    console.log(decrypted);
  }
}
