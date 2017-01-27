<template>
    <div :class="{
                'button is-icon' : true,
                'is-light' : !status
             }"
         @click="$emit('clicked')">
        <i v-if="command.icon" :class="command.icon"></i><span v-if="command.label" v-html="command.label"></span>
    </div>
</template>

<script>
    export default {
        props: ['command', 'status']
    }
</script>