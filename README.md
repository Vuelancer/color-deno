# color-deno

> **Colorlog** is a Deno library for printing colored logs for messages like success, error, warning.

[![tag](https://img.shields.io/badge/deno-v1.0.0-green.svg)](https://github.com/denoland/deno)

## Examples

```ts
import {
  error,
  success,
  warning,
  errorLog,
  successLog,
  warningLog,
} from 'https://deno.land/x/colorlog/mod.ts';

console.log(error('Error!'));
console.log(success('Success!'));
console.log(warning('Warning!'));

errorLog('Error');
successLog('Success');
warningLog('Warning');
```
