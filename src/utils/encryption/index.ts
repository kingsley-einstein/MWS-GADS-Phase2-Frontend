import { Injectable } from '@angular/core';

@Injectable()
export class Encryption {
  constructor() {}
  encryptToken(token: string, _signing_entity: string | number = 'signer') : string {
    // Split token by dots. The dots split the token into 3 parts: The header, the payload and the signature
    const splitToken = token.split('.');
    const header = splitToken[0];
    const payload = splitToken[1];
    const signature = splitToken[2];
    let signer = '';
    if (typeof _signing_entity === 'string') {
      for (let i = 0; i < _signing_entity.length; i++) {
        signer += _signing_entity.charCodeAt(i);
      }
    } else {
      signer = Math.floor(Math.random() * _signing_entity) + '&' + _signing_entity;
    }
    const jsonized = JSON.stringify({
      header: btoa(header.replace('e', '%').replace('1', '&').replace('J', '+')),
      payload: btoa(payload.replace('e', '+').replace('J', '&')),
      signature: btoa(signature.replace('-', ':').replace('=', '+'))
    });
    return btoa((jsonized + '$' + signer));
  }

  decryptToken(encrypted: string, _signing_entity: string | number = 'signer') : string {
    const reversed = atob(encrypted);
    const reversedSplit = reversed.split('$');
    if (typeof _signing_entity === 'string') {
      let signer = '';
      for (let i = 0; i < _signing_entity.length; i++) {
        signer += _signing_entity.charCodeAt(i);
      }
      if (signer !== reversedSplit[1]) {
        console.log(reversedSplit);
        throw new Error('Wrong signing entity')
      }
    } else {
      if (parseInt(reversedSplit[1].split('&')[1]) !== _signing_entity) {
        throw new Error('Wrong signing entity');
      }
    }
    const jsonized_parsed = JSON.parse(reversedSplit[0]);
    const token = atob(jsonized_parsed.header).replace('+', 'J').replace('&', '1').replace('%', 'e') + '.' + atob(jsonized_parsed.payload).replace('&', 'J').replace('+', 'e') + '.' + atob(jsonized_parsed.signature).replace('+', '=').replace(':', '-');
    return token;
  }
}
