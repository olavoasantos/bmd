<template>

    <label :for="slideClass"
           class="slide-show-slide"
    >
        <!--
        --      Slide Body
        -->
        <slot></slot>
    </label>

</template>

<script>
    export default {

        props: {
            /**
             *
             */
            active: {default: false},
        },

        data() {
            return {
                /**
                 *
                 */
                id: null,

                /**
                 *
                 */
                isActive: false,
            };
        },

        /**
         *
         */
        created() {
            this.isActive = (this.active !== false);
        },

        computed: {

            /**
             *
             * @returns {string}
             */
            slideClass() {
                return `slide${this.id}`;
            }
        },
    }
</script>