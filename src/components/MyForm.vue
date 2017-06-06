<template>
    <form class="el-form" :class="[
            labelPosition ? 'el-form--label-' + labelPosition : '',
            { 'el-form--inline': inline }
          ]">
        <slot></slot>
    </form>
</template>

<script>
export default {
    inject: ['$validator'],
    props: {
        rules: Object,
        labelPosition: String,
        labelWidth: String,
        labelSuffix: {
            type: String,
            default: '',
        },
        inline: Boolean,
        showMessage: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
