import { beginVocalsRegex, startWithCapsRegex } from './../app.config';
import { FilterWord } from './../interfaces/filters.interface';
export class Word implements FilterWord {

    _word: string;

    constructor(word) {
        this._word = word;
    }

    startByVocal() : boolean{
       return  beginVocalsRegex.test(this._word);
    }
    greaterThanTwoChars() {
        return this._word.length > 2;
    }
    startByCaps(): boolean {
        return startWithCapsRegex.test(this._word);
    }

}