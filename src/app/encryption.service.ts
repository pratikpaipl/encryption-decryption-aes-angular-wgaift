import { Injectable } from '@angular/core';
import * as CryptoTS from 'crypto-ts';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  key: string = '1njanrhdkCnsahrebfdMvbjo32hqnd31';
  iv: string = 'jsKidmshatyb4jdu';
  appProperties = {
    VALUES: {
      KEY: 'MTIzNDU2Nzg5MEFCQ0RFRkdISUpLTE1O',
      IV: 'jsKidmshatyb4jdu',
    },
  };

  constructor() {}

  encryptionAES(msg) {
    // Encrypt
    const ciphertext = CryptoTS.AES.encrypt(msg, this.key, {
      iv: CryptoTS.enc.Hex.parse('jsKidmshatyb4jdu'),
    });
    return ciphertext.toString();
  }

  decryptionAES(msg) {
    // Decrypt
    
    const bytes = CryptoTS.AES.decrypt(msg, this.key, {
      iv: CryptoTS.enc.Hex.parse('jsKidmshatyb4jdu'),
    });
    const plaintext = bytes.toString(CryptoTS.enc.Utf8);
    return plaintext;
  }
}
