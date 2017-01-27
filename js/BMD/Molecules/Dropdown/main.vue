<template>
    <div class="dropdown" v-click-outside="dismiss">
        <input ref="controller" type="checkbox" class="dropdown-controller" :id="dropdownId">
        <label class="dropdown-header" :for="dropdownId">
            <slot name="trigger"></slot>
        </label>
        <div class="dropdown-menu">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: { default: null },
        },

        data() {
            return {
                dropdownId: null,
            };
        },

        mounted() {
            this.dropdownId = this.id || `dropdown-${str_random()}`;
        },

        methods: {
            dismiss() {
                if(this.$refs.controller.checked) {
                    this.$refs.controller.checked = false;
                }
            }
        },
    }
</script>