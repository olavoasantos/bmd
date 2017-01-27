class EditorCommand {
    constructor() {
        this.tag = null;
        this.label = null;
        this.name = null;
        this.openTag = `<${this.tag}>`;
        this.closeTag = `</${this.tag}>`;
        this.icon = null;
    }

    fire() {
        //
    }

    exec(command, value = null) {
        document.execCommand(command, false, value);
    }

    addTag(command) {
        this.exec('formatBlock', command);
    }

    status() {
        return document.queryCommandState(this.name);
    }
}

export default EditorCommand;