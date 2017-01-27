import EditorCommand from "./EditorCommand";

class EditorH5 extends EditorCommand {
    constructor() {
        this.tag = 'h5';
        this.name = 'h5';
        this.label = 'h5';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = '';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorH5;