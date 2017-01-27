<template>
    <div class="modal"
    >
        <input ref="trigger" type="checkbox" class="modal-trigger" :id="modalId">
        <label :class="overlayClass" :for="modalId"></label>

        <label :for="modalId" style="cursor: pointer">
            <slot name="trigger"></slot>
        </label>

        <div class="modal-container">
            <slot>
                <div class="card">
                    <div class="card-header">
                        <slot name="header">
                            <h3 class="card-title">{{ title || '' }}</h3>
                        </slot>
                    </div>
                    <div class="card-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="card-footer">
                        <slot name="footer">
                            <label :for="modalId" class="item action">Close</label>
                        </slot>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    import keypress from "../../../Vendor/keypress-2.1.4.min.js"

    export default {

        props: {
           modal: { default: null },
           type: { default: null },
        },

        data() {
            return {
                modalId: null
            };
        },

        computed: {
            overlayClass() {
                if (this.type) {
                    return `modal-overlay ${this.type}`;
                } else {
                    return `modal-overlay`
                }
            }
        },

        mounted() {
            let key = new keypress.Listener();
            key.simple_combo("esc", this.dismiss);
            this.modalId = this.modal || `modal-${str_random()}`;
        },

        methods: {
            dismiss() {
                this.$refs.trigger.checked = false;
            }
        }

    }
</script>