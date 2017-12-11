# ts-jest-object-spread-bug


### To reproduce

0. Clone this repo
0. `npm install`
0. `npm t` (will fail with `ts-jest-object-spread-bug/lib/index.js: Unexpected token (7:4)`)
0. Remove lines 29, 30, 31 in package.json or `git checkout remove-transform`
0. Run `npm t` again (`index.test.js` passes)
