<template>
    <nav>
        <div v-if="user">
            <p>Добро пожаловать {{ user.displayName }}</p>
            <p class="email">Вы вошли в аккаунт с почтой {{ user.email }}</p>
        </div>
        <button @click="handleLogout">
            Выйти
        </button>
    </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { user } from "../composables/getUser";
import useLogout from "../composables/useLogout";

const router = useRouter();

const handleLogout = async () => {
    const { logout, error } = useLogout();

    await logout();

    if (error.value){
        console.log(error.value);
    } else {
        router.push("/");
    }
};
</script>

<style>
    nav{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email {
        font-size: 14px;
        color: #999;
    }
</style>