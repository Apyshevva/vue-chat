<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Name" v-model="name" />
    <input type="email" required placeholder="Email" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

const name = ref("");
const email = ref("");
const password = ref("");

const emit = defineEmits(['signup'])

const { signup,error } = useSignup();

const handleSubmit = async () => {
  await signup(name.value, email.value, password.value);

  if (error.value) {
    console.log(error.value)
  }
  else {
    emit('signup')
  }
};
</script>

<style>
</style> 