require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth office coin install depth equal gasp'; 
let testAccounts = [
"0x171b9c7f604141874c4c57a6f08ca2f199e4f5f17cadf76c95ae4563a291ea1a",
"0xceef8fb8a8a365c137f73e4f8b4a4659e30743d4a1e44078e7414cff270ee15b",
"0x101bdd8d6c67a3760e45a91a6f662539182aafcf988d264f039f6877364c0eb0",
"0x83e29fcdf281e9e48c2ea3c0d1addab152b7ea46bfa42208001ba0c9bd7df7d0",
"0xb5a26692c36d7c5bb41094d49929bf75d733db93686220b0ec3f5ebd395507da",
"0x434f62ddf24ecbfa4ef879923a4af6544f80f64bae6d46d8747bc2cfdda7dde5",
"0x9f4a30c69070775f61dd3adb90e329f45420afa848c2ac18bb675250b3ab2ebc",
"0xd79f5e3dc2948c0bbbd7a56de64e9a6477275f57c86989a7c5437cace2be0beb",
"0x05c4d737dec9f01cabd00c8301e2e10794896b172d722eaeb6f6e415abc5bf92",
"0x78093a8b741b532390026f188d8221f40a9361f8fb91e2517513a606be440115"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

