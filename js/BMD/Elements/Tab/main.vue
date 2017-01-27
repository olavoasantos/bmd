<template>
    <div v-if="isActive" class="tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            'name': {
                required: true
            },
            'id':{
                default: null
            },
            'selected': {
                default: false
            },
        },

        data() {
            return {
                isActive: false,
            };
        },

        mounted() {
            this.isActive = (this.selected !== false);
        },

        computed: {
            slug() {
                if (this.id) {
                    return this.id;
                } else {
                    return encodeURI(this.name.toLowerCase().replace(/ /g, '-'));
                }
            }
        },

        methods: {

        },
    }
</script>