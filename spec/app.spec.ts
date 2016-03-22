/// <reference path="../typings/main.d.ts" />

import {App} from '../src/app/app';

describe("Given an app", function(){
    var sut;
    
    beforeEach(() => {
        console.log("hi");
      sut = new App();
    });
    
    it("should", () => {
        expect(sut.getMessage()).toEqual('Hello World!');
    });
})