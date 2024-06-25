<template>
    <div>
        <div class="grid mb-5">
            <div class="col-12 sub-heading">SKILLS</div>
        </div>
        <div class="grid">

            <div v-for="(skill, index) in Skills" :key="`skill-${index}`" class="col-12 md:col-4 mb-5">
                <Card class="h-full">
                    <template #content>
                        <div class="grid">
                            <div class="col-12 sub-heading mb-3">{{ skill.title }}</div>
                            <div class="col-12">
                                <div class="grid">
                                    <div v-for="(item, index2) in skill.items" :key="`item-${index2}`"
                                        class="col svg-box">
                                        <img class="svg-img" :src="item.image" :alt="item.title"
                                            v-tooltip.top="item.title">
                                    </div>
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
import Skills from "@/config/portfolio/skills.js";
</script>
<style scoped>
.svg-box {
    padding: .5rem;
    text-align: center;
}

.svg-img {
    max-width: 100px;
    height: 100px;
    padding: 1rem;
}
</style>