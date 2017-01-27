import EditorCommand from "./EditorCommand";

class EditorH3 extends EditorCommand {
    constructor() {
        this.tag = 'h3';
        this.name = 'h3';
        this.label = 'h3';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = '';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorH3;