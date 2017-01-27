<template>
    <div class="tabs">
        <ul class="tab-header">
            <a :class="{
                    'tab-item': true,
                    'is-active': tab.isActive
               }"
               v-for="tab in tabs"
               :href="`#${tab.slug}`"
               @click="selectTab(tab)">
                   {{tab.name}}
               </a>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {

        },

        data() {
            return {
                tabs: [],
            };
        },
        
        created() {
          this.tabs = this.$children;
        },

        computed: {

        },

        methods: {
            selectTab(selected) {
                this.tabs.forEach(tab => {
                    tab.isActive = tab.slug == selected.slug;
                });
            }
        },
    }
</script>