import h1 from "./EditorH1";
import h2 from "./EditorH2";
import h3 from "./EditorH3";
import h4 from "./EditorH4";
import h5 from "./EditorH5";
import div from "./EditorDiv";
import bold from "./EditorBold";
import underline from "./EditorUnderline";
import paragraph from "./EditorParagraph";
import blockquote from "./EditorBlockquote";

class Editor {
    constructor() {
        this.__reserved = ['::', '(', ')'];

        this.__other = [
            ['&nbsp;', ' '],
            ['::p(<br>)p::', ''],
        ];

        this.commands = {
            h1: new h1,
            h2: new h2,
            h3: new h3,
            h4: new h4,
            h5: new h5,
            div: new div,
            bold: new bold,
            p: new paragraph,
            underline: new underline,
            blockquote: new blockquote
        };

        this.string = "";
    }

    encrypt(string) {
        this.string = string || this.string;
        this.__encryptOther();
        this.__encryptSpecial();
        this.__encryptCommands();

        return this.string;
    }

    decrypt(string = null) {
        string = string || this.string;

        for(let command in this.commands) {
            while (string.indexOf(this.__makeOpenTag(this.commands[command].tag)) > -1) {
                string = string.replace(
                    this.__makeOpenTag(this.commands[command].tag),
                    this.commands[command].openTag
                );
            }
            while (string.indexOf(this.__makeCloseTag(this.commands[command].tag)) > -1) {
                string = string.replace(
                    this.__makeCloseTag(this.commands[command].tag),
                    this.commands[command].closeTag
                );
            }
        }

        for (let i in this.__reserved) {
            while (string.indexOf(`\\${this.__reserved[i]}`) > -1) {
                string = string.replace(
                    `\\${this.__reserved[i]}`,
                    `${this.__reserved[i]}`);
            }
        }

        return string;
    }

    addTag(command) {
        this.exec('formatBlock', command)
    }

    exec(command, value = null) {
        document.execCommand(command, false, value);
    }

    is(command) {
        return (this.commands[command]) ? this.commands[command].status() : false;
    }

    __encryptSpecial() {
        for (let i in this.__reserved) {
            this.string = this.__replace(this.__reserved[i], `\\${this.__reserved[i]}`, this.string);
        }
    }

    __encryptOther() {
        for (let i in this.__other) {
            this.string = this.__replace(this.__other[i][0], this.__other[i][1], this.string);
        }
    }

    __encryptCommands() {
        for (let command in this.commands) {
            this.string = this.__replace(
                this.commands[command].openTag,
                this.__makeOpenTag(this.commands[command].tag),
                this.string
            );
            this.string = this.__replace(
                this.commands[command].closeTag,
                this.__makeCloseTag(this.commands[command].tag),
                this.string
            );
        }
    }

    __makeOpenTag(name) {
        return `::${name}(`;
    }

    __makeCloseTag(name) {
        return `)${name}::`;
    }

    __replace(replace, replacement, string) {
        return string.split(replace).join(replacement);
    }

    __decryptTag(string, command) {
        let openTag = this.__makeOpenTag(command.tag),
            closeTag = this.__makeCloseTag(command.tag);

        console.log(string.indexOf(openTag));

        while (string.indexOf(openTag) > -1) {
            string = string.replace(openTag, command.openTag);
        }
        //
        // while (string.indexOf(closeTag) > -1) {
        //     string = string.replace(closeTag, command.closeTag);
        // }

        return string;
    }
}

export default Editor;