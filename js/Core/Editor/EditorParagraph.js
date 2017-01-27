import EditorCommand from "./EditorCommand";

class EditorParagraph extends EditorCommand {
    constructor() {
        this.tag = 'p';
        this.label = '';
        this.name = 'p';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = 'fa fa-fw fa-paragraph';
    }

    fire() {
        this.addTag(this.tag);
    }
}

export default EditorParagraph;