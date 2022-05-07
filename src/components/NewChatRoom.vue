<template>
  <form>
    <textarea
      @keypress.enter.prevent="handleSubmit"
      v-model="message"
      placeholder="Type a message and hit enter to send"
    ></textarea>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { user } from "../composables/getUser";
import { timestamp } from "../firebase/config";
import useCoolection from "../composables/useCollection";

const message = ref("");
const { addDoc } = useCoolection();

const handleSubmit = async () => {
  const newMessage = {
    author: user.value.displayName,
    createdAt: timestamp(),
    content: message.value,
  };
  const { error } = await addDoc(newMessage, "messages");

  if (error.value) console.log(error.value)

  message.value = ''
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>