<template>
    <div @mouseleave="initTimer"
         :class="alertClass"
         @mouseenter="pause"
         v-if="isVisible"
    >
        <div v-if="icon" class="alert-icon">
            <i :class="iconClass"></i>
        </div>
        <div class="alert-message">
            <span class="alert-highlight">
                <slot name="highlight"></slot>
            </span>

            <slot></slot>
        </div>
        <span @click="dismiss" v-if="!persistent" class="alert-close"></span>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {default: null},
            time: {default: 5000},
            type: {default: null},
            persistent: {default: false},
        },

        data() {
            return {
                timer: true,
                isVisible: true,
            };
        },

        created() {
            this.initTimer();
        },

        computed: {

            iconClass() {
                return `fa fa-fw fa-${this.icon}`;
            },

            alertClass() {
                return (this.type) ? `alert ${this.type}` : `alert`;
            },
        },

        methods: {

            initTimer() {
                this.timer = setTimeout(
                    this.dismiss,
                    this.time
                );
            },

            pause() {
                clearTimeout(this.timer);
            },

            dismiss() {
                this.isVisible = false;
            }

        },
    }
</script>