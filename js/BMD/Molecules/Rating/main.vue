<template>
    <div class="rating">
        <span :class="{
                'symbol': true,
                'is-scored': n.scored,
                'is-rated': isRated($index),
               }"
              @click="rate($index+1)"
              v-for="(n, $index) in scored">
            <slot>
                <i :class="icon"></i>
            </slot>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {default: 'fa fa-fw fa-star'},
            rating: {default: null},
            score: {default: 0},
            max: {default: 5},
        },

        data() {
            return {
                myScore: null,
                scored: []
            };
        },

        created() {
            for (let i = 1; i <= this.max; i++) {
                this.scored.push({
                    scored: (i <= this.score)
                });
            }
            this.myScore = this.rating;
        },

        computed: {},

        methods: {
            rate(n) {
                this.myScore = n;
                this.$emit('score', n);
            },

            isRated(n) {
                return (this.myScore && n+1 <= this.myScore);
            },

            isScored(n) {
                return n <= this.score;
            }
        },
    }
</script>