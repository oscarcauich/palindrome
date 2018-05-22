let assert = require('assert');
let Phrase = require('../index.js');

describe('Phrase', () => {
    describe('#palindrome', () => {
        it('should return false for a non-palindrome', () => {
            let nonPalindrome = new Phrase('apple');
            assert(!nonPalindrome.palindrome());
        });

        it('should return true for a plain palindrome', () => {
            let plainPalindrome = new Phrase('racecar');
            assert(plainPalindrome.palindrome());
        });

        it('should return true for a mixed-case palindrome', () => {
            let mixedCase = new Phrase('RaceCar');
            assert(mixedCase.palindrome());
        });
        it('should return true for a palindrome with punctuation', () => {
            let withPunctuation = new Phrase('Madam, I\'m Adam.');
            assert(withPunctuation.palindrome());
        });
    });
    describe('#letters', () => {
        it('should return only letters', () => {
            let punctuatedPalindrome = new Phrase('Madam, I\'m Adam');
            assert.strictEqual(punctuatedPalindrome.letters(), 'MadamImAdam');
        });
    });
});