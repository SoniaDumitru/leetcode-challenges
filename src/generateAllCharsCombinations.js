// Generate all combinations of an array, so for instance, ["a", "b", "c", "d"] will generate:

// [
//   "a",    "b",    "ab",   "c",    "ac",
//   "bc",   "abc",  "d",    "ad",   "bd",
//   "abd",  "cd",   "acd",  "bcd",  "abcd"
// ]

function combinations(str) {
    combine = (active, rest, a) => {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            combine(active + rest[0], rest.slice(1), a);
            combine(active, rest.slice(1), a);
        }
        return a;
    }
    return combine("", str, []);
};

// combinations('ab') => result: [ 'ab', 'a', 'b' ];