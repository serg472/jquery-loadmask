**0.4**
  * Added second optional `delay` parameter to `mask()` method that sets a delay in milliseconds before element is masked. This can be used to prevent unnecessary mask display for quick processes (thanks to _Artur Alexandre Moreira_ for this contribution).
  * `mask()` and `unmask()` methods can be applied now to selectors that return multiple elements. For example `$(".grids").mask();`
  * Added `isMasked()` method that checks if provided element is currently masked (delayed mask doesn't count as masked until it is actually shown).

**0.3**
  * Fixed z-index bug for select elements in IE6

**0.2**
  * Fixed issues with IE6

**0.1**
  * Initial release