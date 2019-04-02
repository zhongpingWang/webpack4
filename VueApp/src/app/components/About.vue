<template>
<div>
    <div class="example" @click="myzpp">{{ msg }}</div>
    <div class="example">{{ test }}</div>
</div>
</template>

<script>
import "../../less/a.less"

export default {
    data() {
        return {
            msg: 'ssd!'
        }
    },

    computed: {
        now() {
            return +(new Date())
        },
        test(){
            return this.msg + 1;
        }
    },

    methods: {
        myzpp() {

            this.msg = +new Date();

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
