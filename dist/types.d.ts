export type Algorithm = 'SHA-1' | 'SHA-256' | 'SHA-512';
export interface Challenge {
    algorithm: Algorithm;
    challenge: string;
    salt: string;
    signature: string;
}
export interface ChallengeOptions {
    algorithm?: Algorithm;
    hmacKey: string;
    number?: number;
    salt?: string;
}
export interface Payload {
    algorithm: Algorithm;
    challenge: string;
    number: number;
    salt: string;
    signature: string;
}
