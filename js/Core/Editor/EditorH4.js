import EditorCommand from "./EditorCommand";

class EditorH4 extends EditorCommand {
    constructor() {
        this.tag = 'h4';
        this.name = 'h4';
        this.label = 'h4';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = '';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorH4;