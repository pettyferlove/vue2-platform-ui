<template>
  <p>{{endNum}}</p>
</template>

<style>

</style>

<script>
  export default {
    name: 'VpCountUp',
    props: {
      endNum: {
        type: Number,
        required: true
      }
    }
  }
</script>

