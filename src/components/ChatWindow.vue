<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div :ref="(el) => (messages = el)" v-if="documents" class="messages">
      <div v-for="doc in documents" :key="doc.id" class="message">
       <div v-if="doc.createdAt?.toDate()">
        <span class="created-at">{{
          moment(doc.createdAt.toDate()).startOf("second").fromNow()
        }}</span>
        <span class="name">{{ doc.author }}</span>
        <span class="message">{{ doc.content }}</span>
       </div>
      </div>
    </div>
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onUpdated } from "@vue/runtime-core";
import moment from "moment";
import getCollection from "../composables/getCollection";

const messages = ref();

onUpdated(() => {
    messages.value.scrollTop = messages.value.scrollHeight;
})

const { documents, error } = getCollection("messages");
console.log(documents);
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>