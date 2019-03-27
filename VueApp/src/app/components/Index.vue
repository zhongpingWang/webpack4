<template>
<div class="example" @click="myzpp">{{ msg }}</div>
</template>

<script>
 

export default {
    data() {
        return {
            msg: 'Hello world!'
        }
    },

    methods: {
        myzpp(){

            // if(process.env.NODE_ENV=="development2"){
            //     console.log(1)
            // }else{
            //     console.log(23)
            // }

            console.log(41);
        }
    },
}
</script>

<style lang="less">
.a {
    .example {
        color: red;
    }
}
</style>
