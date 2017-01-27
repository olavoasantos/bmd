import EditorCommand from "./EditorCommand";

class EditorUnderline extends EditorCommand {
    constructor() {
        this.tag = 'u';
        this.label = '';
        this.name = 'underline';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = 'fa fa-fw fa-underline';
    }

    fire() {
        this.exec(this.name);
    }
}

export default EditorUnderline;