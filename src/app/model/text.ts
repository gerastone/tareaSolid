import { Word } from './word';
import { FilterWord } from './../interfaces/filters.interface';
import { Counter } from './../interfaces/counter.interface';
import { defaultSeparator } from '../app.config';

export class Text implements Counter, FilterWord {

    _text: string;
    _separator: string;
    private words: Word[] = []
    constructor(text?: string, separator?: string) {
        this._text = text ? text : '';
        this._separator = separator ? separator : defaultSeparator;
    }


    private convertToArray(separator) {
        this.words = [];
        this._text.split(separator).forEach(word => {
            this.words.push(new Word(word));
        });
    }

    count(): number {
        this.convertToArray(this._separator);
        let words = this.words.map(word => word._word)
            .filter((word, index, self) => self.indexOf(word) === index)
        return words.length;
    }

    startByVocal() {
        this.convertToArray(this._separator);
        let words = this.words.filter((word) => {
            return word.startByVocal() == true;
        })
        console.log(words);
        return words.length;
    }

    greaterThanTwoChars() {
        this.convertToArray(this._separator);
        let words = this.words.filter(word => {
            return word.greaterThanTwoChars() == true;
        })
        return words.length;
    }

    startByCaps() {
        this.convertToArray(this._separator);
        let words = this.words.filter(word => {
            return word.startByCaps() == true;
        })
        return words.length;
    }
}