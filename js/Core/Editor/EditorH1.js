import EditorCommand from "./EditorCommand";

class EditorH1 extends EditorCommand {
    constructor() {
        this.tag = 'h1';
        this.name = 'h1';
        this.label = 'h1';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = '';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorH1;