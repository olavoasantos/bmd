import EditorCommand from "./EditorCommand";

class EditorH2 extends EditorCommand {
    constructor() {
        this.tag = 'h2';
        this.name = 'h2';
        this.label = 'h2';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = '';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorH2;