# Pretty output for JS applications

This node module can be used to give more distinctive output to an application.

## Install and use
1. `npm install git+https://github.com/hdavies5608/prettyout.git --save`
2. Add `prettyOut = require('prettyout')` to your JS file
3. Call either `prettyOut.printOut()` or `prettyOut.returnOut()`

## Parameters

Both functions take a string, a character, and a boolean.

- The string is whatever you want to print e.g. `Look at me`
- The character is what you want to surround it with e.g. `*`
- Finally the boolean is wether the box is closed or not.

## Example
```javascript
prettyOut = require('prettyout')

prettyOut.printOut("Look at me", '*', false)
prettyOut.printOut("Look at me", '*', true)
```
Will produce:
```
**********
Look at me
**********


**************
* Look at me *
**************
```
