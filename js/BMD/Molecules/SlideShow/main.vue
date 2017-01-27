<template>

    <div class="slide-show"
         @mouseenter="pause"
         @mouseleave="initTimer"
    >

        <!--
        --      Slide Show Triggers
        -->
        <input type="radio"
               :name="slideshowId"
               :id="`slide${$index}`"
               :checked="slide.isActive"
               class="slide-show-trigger"
               v-for="(slide, $index) in slides"
        >

        <!--
        --      Slide Show Body
        -->
        <div class="slide-show-body">
            <slot></slot>
        </div>

        <!--
        --      Slide Show Bullets
        -->
        <div class="slide-show-bullets">
            <label :for="`slide${$index}`" v-for="(bullet, $index) in slides" class="slide-show-bullet"></label>
        </div>
    </div>

</template>

<script>
    export default {

        props: {
            /**
             *
             */
            time: {default: 5000}
        },

        data() {
            return {

                /**
                 *
                 */
                timer: null,

                /**
                 *
                 */
                slideshowId: `slide-show-${str_random()}`,

                /**
                 *
                 */
                slides: [],
            };
        },

        /**
         *
         */
        mounted() {
            this.init();
        },

        methods: {

            /**
             *
             */
            init() {
                this.initSlides();
                this.initTimer();
            },

            /**
             *
             */
            initSlides() {
                this.slides = this.$children;
                this.slides.forEach((slide, i) => {
                    slide.id = i;
                });
            },

            /**
             *
             */
            initTimer() {
                this.timer = setTimeout(
                    this.nextSlide,
                    this.time
                );
            },

            /**
             *
             */
            pause() {
                clearTimeout(this.timer);
            },

            /**
             *
             */
            nextSlide() {
                this.pause();
                let index = this.getActiveSlide();
                index = (index < this.slides.length - 1)
                            ? index + 1
                            : 0;
                this.setSlide(index);
                this.initTimer();
            },

            /**
             *
             */
            previousSlide() {
                this.pause();
                let index = this.getActiveSlide();
                index = (index > 0)
                            ? index
                            : this.slides.length - 1;
                this.setSlide(index);
                this.initTimer();
            },

            /**
             *
             * @returns {*}
             */
            getActiveSlide() {
                let index;
                this.slides.forEach((slide, i) => {
                    if (slide.isActive) {
                        slide.isActive = false;
                        index = slide.id;

                        return false;
                    } else {
                        return true;
                    }
                });
                
                return index;
            },

            /**
             *
             * @param index
             */
            setSlide(index) {
                this.slides[index].isActive = true;
            },

        },

    }
</script>