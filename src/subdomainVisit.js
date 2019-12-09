// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.
// Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".
// We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

let cpdomains = [
"901 mail.com",
"50 yahoo.com",
"900 google.mail.com",
"5 wiki.org","5 org",
"1 intel.mail.com",
"951 com"]

var subdomainVisits = function(cpdomains) {
    const domains = {}
    cpdomains.map(cpdomain => {
        const countPair = cpdomain.split(' ')
        const count = Number(countPair[0])
        const subdomains = countPair[1].split('.')
        // console.log(subdomains)

        subdomains.map((index) => {
            const key = subdomains.slice(index).join('.')
            const total = domains[key] ? domains[key] + count : count
            domains[key] = total
            console.log(domains[key])
        })
    })
    return Object.keys(domains).map(key => `${domains[key]} ${key}`)
};

// subdomainVisits(cpdomains) => result: [ '1802 mail.com',
//   '100 yahoo.com',
//   '2700 google.mail.com',
//   '10 wiki.org',
//   '5 org',
//   '3 intel.mail.com',
//   '951 com' ]
