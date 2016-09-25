// Type Letter (uppercase variants okay)
//      a | b | c | d | ... | z

// function letter (l: Letter) -> Letter
// Returns the next letter in the alphabet after `l`
// Wraps around z -> a.
export const letter = (() => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return l => {
        if (typeof l !== 'string') {
            throw new Error('Expected l to be a string, but got ' + typeof l);
        }

        // Index of l in the alphabet
        const idx = alphabet.indexOf(l.toLowerCase());

        if (idx < 0) {
            throw new Error('Expected l to be a letter in the alphabet, but got ' + l);
        }

        return alphabet[(idx + 1) % alphabet.length];
    };
})();

// function inf (l: Letter) -> Object
// Returns an object with the following behavior
//
//      inf(l)[letter(l)] equals inf(letter(l))
//              for any l in the alphabet
//
// Example:
//      
//      inf('a').b.c.d equals inf('d')
export default function inf (l) {
    return {
        get [letter(l)] () {
            return inf(letter(l));
        },

        letter: l,
    };
}
