<template>
    <div :class="[
        type === 'textarea' ? 'el-textarea' : 'el-input',
        size ? 'el-input--' + size : '',
        {
          'is-disabled': disabled
        }
      ]">
        <input :name="name" class="el-input__inner" />
    </div>
</template>

<script>
export default {
    inject: ['rulesets', '$validator'],
    props: ['type', 'size', 'disabled', 'name'],
};
</script>
