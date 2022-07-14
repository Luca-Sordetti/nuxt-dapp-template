<script setup lang="ts">
// import { ethers } from "ethers";
// import Lock from "../artifacts/contracts/Lock.sol/Lock.json";

// const contractAddress: string = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const auth = useAuth();
</script>

<template>
    <div>
        <button v-if="!auth.isAuthenticated" @click="auth.login">Log in</button>
        <button v-else @click="auth.logout">Log out</button>
        
        <div v-if="auth.isAuthenticated">
            <NuxtLink to="/protected">Protected</NuxtLink>
        </div>
    </div>
</template>
