"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const core = require('@actions/core');
const artillery = require('artillery');
const { promises: fs } = require('fs');
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filepath = core.getInput('filepath');
            core.debug(`filepath=${filepath}`);
            const content = yield fs.readFile(filepath, 'utf8');
            core.debug('content=');
            core.debug(content);
            artillery.run(filepath, {});
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
