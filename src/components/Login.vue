<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" required placeholder="Email" />
    <input v-model="password" type="password" required placeholder="Password" />
    <button>Log In</button>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["login"]);

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  const { login, error } = useLogin();

  await login(email.value, password.value);

  if (error.value) {
    console.log(error.value);
  } else {
    emit('login')
  }

  email.value = "";
  password.value = "";
};
</script>

<style>
</style> 