/*!
* Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
*/

import {
  default as chai,
  expect
} from 'chai';
import {default as chaiBytes} from 'chai-bytes';
chai.use(chaiBytes);
global.should = chai.should();

import {
  encode,
  decode
} from '..';

describe('cborld', () => {
  describe('encode', () => {
    it('should encode an empty JSON-LD Document', async () => {
      const jsonldDocument = {};
      const cborldBytes = await encode({jsonldDocument});
      expect(cborldBytes).to.equalBytes('d90501a0');
    });
    it.skip('should encode a simple JSON-LD Document', async () => {
    });
  });
  describe('decode', () => {
    it.skip('should decode empty document CBOR-LD bytes', async () => {
      const cborldBytes = new Uint8Array([0xd9, 0x05, 0x01, 0xa0]);
      const jsonldDocument = await decode({cborldBytes});
      expect(jsonldDocument).to.deepEqual({});
    });
    it.skip('should decode simple CBOR-LD bytes', async () => {
    });
  });
});
