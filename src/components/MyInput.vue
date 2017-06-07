<template>
    <div class="el-input" :class="{'is-disabled': disabled}">
        <input v-if="type !== 'textarea'" class="el-input__inner" 
               v-bind="$props" :autocomplete="autoComplete" :value="currentValue" 
               ref="input" @input="handleInput" @focus="handleFocus" @blur="handleBlur">
    </div>
</template>
<script>
export default {
    inject: ['rulesets', '$validator'],

    data() {
        return {
            currentValue: this.value,
        };
    },
    props: {
        value: [String, Number],
        placeholder: String,
        size: String,
        resize: String,
        readonly: Boolean,
        autofocus: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            default: 'text',
        },
        name: String,
        autosize: {
            type: [Boolean, Object],
            default: false,
        },
        rows: {
            type: Number,
            default: 2,
        },
        autoComplete: {
            type: String,
            default: 'off',
        },
        form: String,
        maxlength: Number,
        minlength: Number,
        max: {},
        min: {},
        step: {},
    },
    /* eslint-disable */
    watch: {
        'value'(val) {
            this.setCurrentValue(val);
        },
    },
    methods: {
        handleBlur(event) {
            // this method in original el-input is buggy
            // causing validation to fail on blur
            //
            // compare this with
            // https://github.com/ElemeFE/element/blob/dev/packages/input/src/input.vue#L133
            const value = event.target.value;
            this.$emit('blur', value);
        },
        inputSelect() {
            this.$refs.input.select();
        },
        handleFocus(event) {
            this.$emit('focus', event);
        },
        handleInput(event) {
            const value = event.target.value;
            this.$emit('input', value);
            this.setCurrentValue(value);
            this.$emit('change', value);
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return;
            this.currentValue = value;
        },
    },
    created() {
        this.$on('inputSelect', this.inputSelect);
    },
};
</script>
