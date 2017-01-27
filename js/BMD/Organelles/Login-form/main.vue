<template>
    <li>
        <!-- Button show modal -->
        <a @click="isVisible = true">
            <slot>{{ $trans('auth.actions.login') }}</slot>
        </a>

        <form @submit.prevent="submit"
              @keydown="form.errors.clear($event.target.name)"
        >
            <modal v-if="isVisible" @close="isVisible = false">
                <template slot="title">
                    {{ $trans('auth.actions.login') }}
                </template>
                <template>
                    <!-- E-mail input -->
                    <div :class="{ 'form-control' : true, 'has-error' : form.errors.has('email')}"
                         :data-message="form.errors.get('email')"
                         :data-label="$trans('validation.attributes.email')"
                    >
                        <div class="icon">
                            <i class="fa fa-user"></i>
                        </div>
                        <input type="text" :placeholder="$trans('validation.attributes.email')" name="email" v-model="form.email">
                    </div>

                    <!-- Password input -->
                    <div :class="{ 'form-control' : true, 'has-error' : form.errors.has('password')}"
                         :data-message="form.errors.get('password')"
                         :data-label="$trans('validation.attributes.password')"
                    >
                        <div class="icon">
                            <i class="fa fa-lock"></i>
                        </div>
                        <input type="password" :placeholder="$trans('validation.attributes.password')" name="password" v-model="form.password">
                    </div>
                </template>
                <template slot="footer">
                    <!-- Button Submit -->
                    <button style="font-size: inherit" :class="buttonClass"
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
                    return {email: '', password: ''}
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
            buttonClass() {
                let btnClass = (this.form.errors.any()) ? 'item action is-disabled' : 'item action';
                return (this.form.status) ? `${btnClass} ${this.form.status}` : btnClass;
            },
            buttonAction() {
                return (this.form.status == 'is-loading') ? this.$trans('forms.loading') : this.$trans('auth.actions.login');
            }
        },
        methods: {
            submit() {
                this.form.post('/login')
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