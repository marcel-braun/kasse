<template>
    <div>
        <h1>{{msg}} <Button value="test" /></h1>
    </div>
</template>

<script>
import Button from '@/components/keyPad/button'

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            Button
        }
    }
</script>