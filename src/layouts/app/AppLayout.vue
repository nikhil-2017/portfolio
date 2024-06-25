<template>
    <div class="app-wrapper">
        <AppTopbar></AppTopbar>

        <div class="app-content">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script setup>
import AppTopbar from './AppTopbar.vue'
</script>