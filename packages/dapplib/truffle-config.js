require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note pulse coast gesture brass fresh gas'; 
let testAccounts = [
"0x6a1de496e58db5122c41cd3cb32a177651359c79d203ce392b433c4c56d2b101",
"0x785aeeff2d5f84fe6512a5912b4af6042dc3ec5eff382169338ae80bde201514",
"0xed66e014a3817826bb887b55b8f8d74a3aa2619432492aa7de7e110311755074",
"0xd1b23c6d8f4f889c4862e3664c81e9084416d67cbb6903abc1068434b462a9e4",
"0x5a2d179f0a34b8569fe8fd3d82c4bea5765ca8ff1e0cf9470ccbb01020763bf9",
"0x7757be42bf1ea80c5fe43607490cc170423a9e52f4086a0dbf04abfcea706d78",
"0x510fce9c76c065294f80194c0590fe6507f39f7a7a223f826044d07d31bdd53d",
"0xaf526ead9394783ac2f4d43f1c23d9a878b14dba8a6070b9dd2365cdb8af272d",
"0xd8e603c360ddf618da49c3bda663cc62d354ad62f1f8b1a6ebd51170ba50a076",
"0x30db1d86b6c48437dd626f15e3e8643472b5a405172086e61ef648114adcfff1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


