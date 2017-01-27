import EditorCommand from "./EditorCommand";

class EditorDiv extends EditorCommand {
    constructor() {
        this.tag = 'div';
        this.label = '';
        this.name = 'div';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = '';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorDiv;