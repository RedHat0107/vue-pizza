<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/login.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <button class="btn btn-block btn-success" type="submit">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            email:"",
            password:"",
            confirmPassword:""
        }
    },
    // 组件内的守卫
    beforeRouteEnter:(to,from,next)=>{
        next(vm=>vm.$store.dispatch('setUser',null));
    },
    methods:{
        onSubmit(){
          axios.get('/users.json').then(res=>{
            const data = res.data;
            const users = [];
            for(let key in data){
              const user = data[key];
              users.push(user);
            }
            // 实现过滤
            let result = users.filter(item=>(item.email === this.email && item.password === this.password));

            if(result != null && result.length > 0){
              this.$store.dispatch('setUser',result[0].email);
              this.$router.push({name:'home'});
            }else{
              alert('账号或者密码错误!');
              this.$store.dispatch('setUser',null);
            }
          })

        }
    }
}
</script>