<template>
    <div class="app-home">
        <div class="grid">
            <div class="col-12 heading">{{ Home.name }}</div>
            <div class="col-12 sub-heading">{{ Home.job_profile }}</div>
        </div>
        <div class="grid mb-5">
            <div class="col-12 social mt-5">
                <div class="social-items">
                    <div v-for="(item, index) in Contact.social" :key="`app-button-${index}`">
                        <a class="social-item" v-if="item?.link" :href="item?.link"
                            :target="(item?.target) ? item.target : '_self'" v-tooltip.top="item.title">
                            <span v-if="item?.icon" :class="item.icon"></span>
                            <!-- <span v-if="item?.image"> -->
                            <img v-if="item?.image" width="25" class="img-fluid" :src="item.image" :alt="item.title">
                            <!-- </span> -->
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid justify-content-center">
            <div class="col-12 md:col-8 lg:col-6">
                {{ Home.profile }}
            </div>
        </div>
    </div>
</template>
<script setup>
import Home from "@/config/portfolio/home.js";
import Contact from "@/config/portfolio/contact.js";
</script>