<template>
    <li>
        <!-- Button to show modal -->
        <a @click="isVisible = true">
            <slot>{{ $trans('auth.actions.register') }}</slot>
        </a>

        <!-- Form -->
        <form @submit.prevent="submit"
              @keydown="form.errors.clear($event.target.name)"
        >
            <modal v-if="isVisible" @close="isVisible = false">

                <!-- Modal Title -->
                <template slot="title">
                    {{ $trans('auth.actions.register') }}
                </template>

                <!-- Form inputs -->
                <template>
                    <!-- Name input -->
                    <div :class="{ 'form-control' : true, 'has-error' : form.errors.has('name')}"
                         :data-message="form.errors.get('name')"
                         :data-label="$trans('validation.attributes.name')"
                    >
                        <input type="text" :placeholder="$trans('validation.attributes.name')" name="name" v-model="form.name">
                    </div>

                    <!-- E-mail input -->
                    <div :class="{ 'form-control' : true, 'has-error' : form.errors.has('email')}"
                         :data-message="form.errors.get('email')"
                         :data-label="$trans('validation.attributes.email')"
                    >
                        <input type="email" :placeholder="$trans('validation.attributes.email')" name="email" v-model="form.email">
                    </div>

                    <!-- Password input -->
                    <div :class="{ 'form-control' : true, 'has-error' : form.errors.has('password')}"
                         :data-message="form.errors.get('password')"
                         :data-label="$trans('validation.attributes.password')"
                    >
                        <input type="password" :placeholder="$trans('validation.attributes.password')" name="password" v-model="form.password">
                    </div>

                    <!-- Password confirmation input -->
                    <div :class="{ 'form-control' : true, 'has-error' : form.errors.has('password_confirmation')}"
                         :data-message="form.errors.get('password_confirmation')"
                         :data-label="$trans('validation.attributes.password_confirmation')"
                    >
                        <input type="password" :placeholder="$trans('validation.attributes.password_confirmation')" name="password_confirmation"
                               v-model="form.password_confirmation">
                    </div>
                </template>

                <!-- Modal footer -->
                <template slot="footer">

                    <!-- Submit button -->
                    <button style="font-size: inherit" :class="{
                        'item action' : true,
                        'is-disabled' : form.errors.any(),
                        'is-loading' : form.status == 'loading'
                    }"
                            type="submit"
                    >{{ buttonAction }}
                    </button>

                </template>
            </modal>
        </form>
    </li>
</template>

<script>
    export default {
        props: {
            fields: {
                default() {
                    return {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: '',
                    };
                }
            }
        },
        data() {
            return {
                form: new Form(this.fields),
                isVisible: false,
            };
        },
        computed: {
            buttonAction() {
                return (this.form.status == 'loading') ? this.$trans('forms.loading') : this.$trans('auth.actions.register');
            }
        },
        methods: {
            submit() {
                this.form.post('/register')
                    .then((response) => {
                        location.reload();
                    })
                    .catch((response) => {
                        this.$alert.error('Something went wrong');
                    });
            }
        }
    }
</script>