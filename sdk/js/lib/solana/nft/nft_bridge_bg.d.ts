/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} mint
* @param {number} nonce
* @param {Uint8Array} target_address
* @param {number} target_chain
* @returns {any}
*/
export function transfer_native_ix(program_id: string, bridge_id: string, payer: string, message: string, from: string, mint: string, nonce: number, target_address: Uint8Array, target_chain: number): any;
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} message
* @param {string} from
* @param {string} from_owner
* @param {number} token_chain
* @param {Uint8Array} token_address
* @param {Uint8Array} token_id
* @param {number} nonce
* @param {Uint8Array} target_address
* @param {number} target_chain
* @returns {any}
*/
export function transfer_wrapped_ix(program_id: string, bridge_id: string, payer: string, message: string, from: string, from_owner: string, token_chain: number, token_address: Uint8Array, token_id: Uint8Array, nonce: number, target_address: Uint8Array, target_chain: number): any;
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} to_authority
* @param {Uint8Array} vaa
* @returns {any}
*/
export function complete_transfer_native_ix(program_id: string, bridge_id: string, payer: string, to_authority: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} to_authority
* @param {Uint8Array} vaa
* @returns {any}
*/
export function complete_transfer_wrapped_ix(program_id: string, bridge_id: string, payer: string, to_authority: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {string} spill
* @param {Uint8Array} vaa
* @returns {any}
*/
export function upgrade_contract_ix(program_id: string, bridge_id: string, payer: string, spill: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @param {string} bridge_id
* @param {string} payer
* @param {Uint8Array} vaa
* @returns {any}
*/
export function register_chain_ix(program_id: string, bridge_id: string, payer: string, vaa: Uint8Array): any;
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
export function emitter_address(program_id: string): Uint8Array;
/**
* @param {string} program_id
* @returns {Uint8Array}
*/
export function approval_authority_address(program_id: string): Uint8Array;
/**
* @param {string} program_id
* @param {Uint8Array} token_address
* @param {number} token_chain
* @param {Uint8Array} token_id
* @returns {Uint8Array}
*/
export function wrapped_address(program_id: string, token_address: Uint8Array, token_chain: number, token_id: Uint8Array): Uint8Array;
/**
* @param {string} program_id
* @param {Uint8Array} mint_address
* @returns {Uint8Array}
*/
export function wrapped_meta_address(program_id: string, mint_address: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_wrapped_meta(data: Uint8Array): any;
/**
* @param {Uint8Array} data
* @returns {any}
*/
export function parse_endpoint_registration(data: Uint8Array): any;
export function __wbindgen_json_parse(arg0: any, arg1: any): number;
