let pronoun = ['Last', 'Great', 'Dom'];
let adj = ['ain', 'ofUs', 'Damn', 'Test'];
let doms = ['.com', '.net', '.org', 'info', '.ru', '.us'];

pronoun.forEach((a) => {
    adj.forEach((b) => {
        doms.forEach((d) => {
            console.log('www.' + a + b + d);
        });
    });
});

for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
        for (let d = 0; d < doms.length; d++) {
            console.log('www.' + pronoun[a] + adj[b] + doms[d]);
        }

    }

}