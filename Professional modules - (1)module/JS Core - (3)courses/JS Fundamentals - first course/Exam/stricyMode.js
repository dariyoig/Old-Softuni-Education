function solve(input) {
        console.log(arr.filter(x => /^<(\w+)>(.+)<(\/\1)>$/.test(x)).map(x => x.replace(/<\/*\w+>/gi, '')).join(' '));
}
solve(
    [
        '<h1><span>Hello World!</span></h1>',
        '<p>I am Peter.'
    ]

);