<template>
    <div>
        <div class="grid mb-5 md:mb-0">
            <div class="col-12 sub-heading">{{ Education.title }}</div>
        </div>
        <div class="grid justify-content-center mb-2" v-for="(item, index) in Education.items"
            :key="`education-${index}`">
            <div class="col-12 md:col-8 lg:col-6">
                <Card>
                    <template #content>
                        <div class="grid">
                            <div class="col-3 my-auto">
                                <img class="img-fluid" :src="item.image" :alt="item.name">
                            </div>
                            <div class="col-9 my-auto">
                                <div class="grid">
                                    <div class="col-12 name"><a class="link"
                                            :target="(item?.target) ? item.target : '_self'" :href="item.link">{{
                                                item.name }}</a></div>
                                </div>
                                <div class="grid">
                                    <div class="col-6">{{ item.date }}</div>
                                    <div class="col-6 text-right">{{ item.percentage }}</div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
<script setup>
import Education from "@/config/portfolio/education.js";
</script>