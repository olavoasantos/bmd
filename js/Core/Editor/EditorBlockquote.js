import EditorCommand from "./EditorCommand";

class EditorBlockquote extends EditorCommand {
    constructor() {
        this.tag = 'blockquote';
        this.label = '';
        this.name = 'blockquote';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = 'fa fa-fw fa-quote-right';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorBlockquote;