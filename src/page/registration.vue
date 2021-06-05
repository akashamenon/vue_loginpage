<template>

<div> 
    <b-form-input v-model="name" placeholder="Enter your Name"></b-form-input>
    <div class="mt-2">Value: {{ name }}</div>
    <b-form-input v-model="email" type="email" placeholder="Enter your Mailid"></b-form-input>
    <div class="mt-2">Value: {{ email }}</div>
    <b-form-input v-model="phnumber" type="number" placeholder="Enter your Phone Number"></b-form-input>
    <div class="mt-2">Value: {{ phnumber }}</div>
    <b-form-input v-model="pass" type="password" placeholder="Enter your Password"></b-form-input>
    <div class="mt-2">Value: {{ pass }}</div>

    <b-button variant="outline-primary" @click="addusers">Submit</b-button>
    <b-button variant="outline-primary" @click="clear">Clear</b-button>
</div>
    
</template>

<script>

export default {
    data() {
      return {
        name: '',
        email: '',
        phnumber: '',
        pass: '',
      }
    },
    methods:
    {
        addusers()
        {
            const user={
                name:this.name,
                email:this.email,
                phnumber:this.phnumber,
                pass:this.pass,
            }
            let clientsArr = [];
                if(!localStorage.getItem('Users')) {
                clientsArr.push(user);
                localStorage.setItem('Users', JSON.stringify(clientsArr));
                } 
                else {
                clientsArr = JSON.parse(localStorage.getItem('Users'));
                clientsArr.push(user);
                localStorage.setItem('Users', JSON.stringify(clientsArr));
                }
                this.clear()
                 this.$router.push({ name: 'Login' })
        },
        clear()
        {
                this.name="",
                this.email="",
                this.phnumber="",
                this.pass=""
        }
    }
   
}
</script>
