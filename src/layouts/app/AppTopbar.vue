<template>
    <div class="app-topbar">
        <div class="app-topbar-inner">
            <div class="topbar-items">
                <div v-for="(item, index) in Topbar" :key="`app-button-${index}`">
                    <router-link class="topbar-item" v-if="item?.route" :to="item?.route">
                        <span :class="item.icon"></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Topbar from '@/config/topbar.js'
</script>
