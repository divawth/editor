(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Editor = factory());
}(this, (function () { 'use strict';

  class Editor {
    constructor() {
      this.version = '0.0.1';
    }

  }

  return Editor;

})));
