<template>
<div class="example" @click="myzpp">{{ msg }}</div>
</template>

<script>
import "../../less/a.less"


export default {
    data() {
        return {
            msg: 'ssd!'
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
