import EditorCommand from "./EditorCommand";

class EditorBold extends EditorCommand {
    constructor() {
        this.tag = 'b';
        this.label = '';
        this.name = 'bold';
        this.icon = 'fa fa-fw fa-bold';
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
    }

    fire() {
        this.exec(this.name);
    }
}

export default EditorBold;