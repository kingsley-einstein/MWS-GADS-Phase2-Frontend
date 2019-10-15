import { Injectable } from '@angular/core';

@Injectable()
export class Encryption {
  constructor() {}
  encryptToken(token: string, _signing_entity: string | number) : string {
    // Split token by dots. The dots segregates the token into 3 parts: The header, the payload and the signature
    const splitToken = token.split('.');
    const header = splitToken[0];
    const payload = splitToken[1];
    const signature = splitToken[2];
    const _signed = {
      header: Buffer.from(header, 'base64').toString('hex'),
      payload: Buffer.from(payload, 'base64').toString('hex'),
      signature: Buffer.from(signature, 'base64').toString('hex')
    };
    const jsoned = JSON.stringify(_signed);
    const _hashed_signer = typeof _signing_entity === 'number' ? Buffer.from(_signing_entity.toString(), 'utf8') : Buffer.from(_signing_entity, 'utf8');
    const _mixed_hash = _hashed_signer.toString('base64').replace('=', '/').replace('-', '$');
    const combined = (_mixed_hash + '-' + jsoned);
    const final_hash = Buffer.from(combined).toString('base64');
    return final_hash;
  }

  decryptToken(encrypted: string, _signing_entity: string | number) : string {
    const unhashed_combined = Buffer.from(encrypted, 'base64').toString('utf8');
    const getSplits = unhashed_combined.split('-');
    const _mixed_hash = getSplits[0].replace('$', '-').replace('/', '=');
    const entity = Buffer.from(_mixed_hash, 'base64').toString('utf8');
    if (typeof _signing_entity === 'number') {
      if (parseInt(entity) !== _signing_entity) {
        throw new Error('Wrong signing entity');
      }
    } else {
      if (entity !== _signing_entity) {
        throw new Error('Wrong signing entity');
      }
    }
    const _signedJson = JSON.parse(getSplits[1]);
    const header = Buffer.from(_signedJson.header, 'hex').toString('base64');
    const payload = Buffer.from(_signedJson.payload, 'hex').toString('base64');
    const signature = Buffer.from(_signedJson.signature, 'hex').toString('base64');
    const token = header + '.' + payload + '.' + signature;
    return token;
  }
}
