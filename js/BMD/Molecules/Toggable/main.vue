<template>
    <div class="toggle">
        <input type="checkbox" :checked="isOpen" class="toggle-trigger" :id="toggleId">
        <label :for="toggleId" class="toggle-title">
            <slot name="title">
                {{ title || '' }}
            </slot>
        </label>
        <div class="toggle-body">
            <slot>{{ body || '' }}</slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            content: {default: null},
            isOpen: {default: false},
            title: {default: null},
            url: {default: null},
        },

        data() {
            return {
                toggleId: `toggle-${str_random()}`,
                body: null,
            };
        },

        created() {
            if (this.url && !this.body) {
                $http.get(this.url)
                    .then((response) => {
                        this.body = response.data;
                    })
                    .catch((error) => {
                        // Alert error;
                    });
            }
            this.body = this.content;
        },
    }
</script>