<template>
    <div class="alerts">
        <slot></slot>
        <message v-for="message in messages" :icon="message.icon" :type="message.type">
            <template slot="highlight">{{ message.highlight }}</template>
            <template>{{ message.message }}</template>
        </message>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: this.$alert.all()
            };
        },
    }
</script>