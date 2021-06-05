<template>

<div> 
    <b-form-input v-model="email" placeholder="Enter your Email"></b-form-input>
    <div class="mt-2">Value: {{ email }}</div>
    <b-form-input v-model="password" type="password" placeholder="Enter your Password"></b-form-input>
    <div class="mt-2">Value: {{ password }}</div>

    <b-button variant="outline-primary" @click="loginuser">Login</b-button>
</div>
    
</template>

<script>

export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods:
    {
        loginuser()
        {
            const clientArr = JSON.parse(localStorage.getItem('Users'));
            if(clientArr==null)
            {
                this.$router.push({ name: 'Signup' })
            }
            console.log("clientArray" , clientArr);
            const found = clientArr.find(element => element.email==this.email&&element.pass==this.password);
            console.log(found);

            if(found)
            {
                this.$router.push({ name: 'Dashboard' })
            }

            }

        }
    }
   
</script>
