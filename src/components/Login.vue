<template>
    <div>
        <my-form class="login-form">
            <my-form-item fieldName="email" label="Email">
                <my-input name="email" title="Email" v-model="email" v-validate/>
            </my-form-item>
            <my-form-item fieldName="password" label="Password">
                <my-input type="password" name="password" title="Password" v-model="password" v-validate/>
            </my-form-item>
            <button class="el-button" @click="validateForm()">Log-in</button>

            <br/><br/>
            <div>errors referenced in Login.vue</div>
            <div class="grayish">{{ JSON.stringify(errors) }}</div>
        </my-form>
    </div>
</template>

<script>
import MyForm from '@/components/MyForm';
import MyFormItem from '@/components/MyFormItem';
import MyInput from '@/components/MyInput';

export default {
    $validates: true,
    provide: {
        rulesets: {
            email: 'required|email',
            password: 'required',
        },
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        validateForm() {
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                console.log('No errors in Login form. Submitting to server...');
            }).catch(() => {
                // eslint-disable-next-line
                console.log(`Error while validating the login form:\n${JSON.stringify(this.errors)}`);
            });
        },
    },
    components: { MyForm, MyFormItem, MyInput },
};
</script>

<style>
.login-form {
    display: block;
    width: 400px;
    padding: 30px;
}
</style>
