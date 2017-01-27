<template>
    <div @keyup="check" @keyup.left="check" class="text-editor">
        <ul>
            <li style="display: inline-block">
                <div class="button-group">
                    <editor-command
                            :command="editor.commands['bold']"
                            :status="status['bold']"
                            @clicked="exec('bold')"
                    ></editor-command>
                    <editor-command
                            :command="editor.commands['underline']"
                            :status="status['underline']"
                            @clicked="exec('underline')"
                    ></editor-command>
                </div>
            </li>
            <li style="padding-left: 1rem; display: inline-block">
                <div class="button-group">
                    <editor-command
                            :command="editor.commands['p']"
                            :status="status['p']"
                            @clicked="exec('p')"
                    ></editor-command>

                    <editor-command
                            :command="editor.commands['blockquote']"
                            :status="status['blockquote']"
                            @clicked="exec('blockquote')"
                    ></editor-command>
                </div>
            </li>
            <li style="padding-left: 1rem; display: inline-block">
                <div class="button-group">
                    <editor-command
                            v-for="n in 5"
                            :command="editor.commands[`h${n}`]"
                            :status="status[`h${n}`]"
                            @clicked="exec(`h${n}`)"
                    ></editor-command>
                </div>
            </li>
        </ul>
        <div class="editor" @click="onFocus(this)" ref="output" contenteditable></div>
    </div>
</template>

<script>
    import EditorCommand from "./EditorCommand.vue"
    export default {
        data() {
            return {
                editor: new Editor,
                status: {},
            };
        },

        components: {
            'editor-command': EditorCommand,
        },

        mounted() {
            this.check();
        },

        methods: {
            check() {
                this.editor.string = this.$refs.output.innerHTML;
                this.$emit('output', this.editor.encrypt(this.$refs.output.innerHTML));

                for (let ref in this.editor.commands) {
                    this.$set(this.status, ref, this.editor.is(ref))
                }
            },

            onFocus() {
                if (this.$refs.output.children.length === 0) {
                    this.editor.addTag('p');
                }

                this.check();
            },

            exec(command) {
                this.editor.commands[command].fire();
                this.check();
            }
        }
    }
</script>