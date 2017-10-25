<template>
    <button type="button" name="button">{{value}}</button>
</template>

<script>
    export default {
        name: "MyButton",
        props: ["value"],
        data () {
            return {
                msg: 'sfsdf'
            }
        }
    }
</script>