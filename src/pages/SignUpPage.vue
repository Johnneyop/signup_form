<template>
    <h1>Sign Up</h1>
    <label htmlFor="username">Username</label>
    <input id="username"/>

    <label htmlFor="e-mail">E-mail</label>
    <input id="e-mail"/>

    <label htmlFor="password">Password</label>
    <input id="password" type="password" v-model="password"/>

    <label htmlFor="password-repeat">Password Repeat</label>
    <input id="password-repeat" type="password" v-model="passwordRepeat"/>

    <button :disabled="isDisabled">Sign Up</button>
</template>
<script>
export default {
    name: 'SignUpPage',
    data() {
        return {
            password: "",
            passwordRepeat: "",
        };
    },
    computed: {
        isDisabled() {
            return this.password && this.passwordRepeat ? this.password !== this.passwordRepeat : true;
        }
    }
}
</script>