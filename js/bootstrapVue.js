import Vue from 'vue';

/**
 * Alert
 * Alert messages to your users in an easy
 * way.
 */
import Alert from "./Core/Alert/main";
Vue.prototype.$alert = new Alert;

/**
 * Translation
 * Sync your front-end to Laravel's translation
 * files.
 */
import Trans from "./Core/Trans/main";
Vue.prototype.$trans = Trans;

/**
 * Vue directives
 */
Vue.directive('click-outside', require('./Vue/Directives/click-outside'));

/**
 * Vue filters
 */
Vue.filter('richtext', function(value) {
        let editor = new Editor;
        return editor.decrypt(value);
    });

/**
 * Vue components
 */

// Organelles
Vue.component('panel', require('./BMD/Organelles/Panel/main.vue'));
Vue.component('alerts', require('./BMD/Organelles/Alerts/main.vue'));
Vue.component('login-form', require('./BMD/Organelles/Login-form/main.vue'));
Vue.component('register-form', require('./BMD/Organelles/Register-form/main.vue'));

// Molecules
Vue.component('tabs', require('./BMD/Molecules/Tabs/main.vue'));
Vue.component('modal', require('./BMD/Molecules/Modal/main.vue'));
Vue.component('rating', require('./BMD/Molecules/Rating/main.vue'));
Vue.component('message', require('./BMD/Molecules/Message/main.vue'));
Vue.component('dropdown', require('./BMD/Molecules/Dropdown/main.vue'));
Vue.component('toggable', require('./BMD/Molecules/Toggable/main.vue'));
Vue.component('text-editor', require('./BMD/Molecules/Editor/main.vue'));
Vue.component('slide-show', require('./BMD/Molecules/SlideShow/main.vue'));

// Elements
Vue.component('tab', require('./BMD/Elements/Tab/main.vue'));
Vue.component('slide', require('./BMD/Elements/Slide/main.vue'));

/**
 * Vue instance
 * @type {Vue}
 */
const app = new Vue({
    el: '#app',
    data() {
        return {
            overlayIsVisible: false,
            showCollapsedMenu: false,
            modalId: `modal-${str_random()}`,
            name: 'Stranger',
            body: '',
        };
    },
    computed: {
        htmlBody() {
            let editor = new Editor;
            return editor.decrypt(this.body);
        }
    },
    methods: {
        getOutput(str) {
            this.body = str;
        },
        getMyName() {
            window.Alfred.first('profile').select('name').get()
                .then((response) => {
                    this.name = response.profile.name;
                });
        }
    }
});
