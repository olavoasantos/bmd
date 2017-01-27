<template>
    <div class="panel">
        <input ref="trigger" type="checkbox" class="panel-trigger" :id="panelId">
        <label :class="overlayClass" :for="panelId"></label>

        <label :for="panelId" style="cursor: pointer">
            <slot name="trigger"></slot>
        </label>
        <div :class="`panel-container ${position} ${background}`">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import keypress from "../../../Vendor/keypress-2.1.4.min.js"

    export default {
        props: {
            id: {default:null},
            type: { default: null },
            position: {default:'is-left'},
            background: {default:'is-white'},
        },

        data() {
            return {
                panelId: null,
            };
        },

        computed: {
            overlayClass() {
                if (this.type) {
                    return `panel-overlay ${this.type}`;
                } else {
                    return `panel-overlay`
                }
            }
        },


        mounted() {
            let key = new keypress.Listener();
            key.simple_combo("esc", this.dismiss);
            this.panelId = this.id || `panel-${str_random()}`;
        },

        methods: {
            dismiss() {
                this.$refs.trigger.checked = false;
            }
        },
    }
</script>