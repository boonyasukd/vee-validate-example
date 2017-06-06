<template>
    <div class="el-form-item" :class="{'is-error': errors.has(fieldName)}">
        <label class="el-form-item__label" v-if="label">{{ label }}</label>
        <div class="el-form-item__content">
            <slot></slot>
            <transition name="el-zoom-in-top">
                <div class="el-form-item__error" v-if="errors.has(fieldName)">{{ errors.first(fieldName) }}</div>
            </transition>
        </div>
        <br/>
        <div>errors referenced in MyFormItem.vue</div>
        <div class="grayish">{{ JSON.stringify(errors) }}</div>
    </div>
</template>

<script>
export default {
    inject: ['$validator'],
    props: ['fieldName', 'label'],
};
</script>
