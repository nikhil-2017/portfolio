<template>
    <div>
        <div class="grid mb-5">
            <div class="col-12 sub-heading">{{ WorkExperience.title }}</div>
        </div>
        <div class="grid mb-5 justify-content-center">
            <div class="col-12 md:col-8 mb-5" v-for="(work, index) in WorkExperience.companies" :key="`work-${index}`">
                <Card>
                    <template #content>
                        <div class="grid">
                            <div class="col-12">
                                <a v-if="work.link" :href="work.link" :target="(work?.target) ? work.target : '_self'">
                                    <img class="img-fluid" :src="work.image" :alt="work.name">
                                </a>
                                <img v-else class="img-fluid" :src="work.image" :alt="work.name">
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-6">{{ work.job_title }}</div>
                            <div class="col-6 text-right">{{ work.date }}</div>
                        </div>
                        <div class="grid">
                            <div class="col-12">
                                <ul class="list-none" style="padding-inline-start: .75rem;">
                                    <li class="mb-3" v-for="(project, index) in work.projects"
                                        :key="`project-${index}`">
                                        <div v-html="project"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
        <div class="grid mb-5">
            <div class="col-12">
                <div class="logos">
                    <div class="logo-slide">
                        <img v-for="(company, index) in WorkExperience.carousel" :key="`work-company-${index}`"
                            :src="company.image" :alt="company.name">
                    </div>
                    <div class="logo-slide">
                        <img v-for="(company, index) in WorkExperience.carousel" :key="`work-company-${index}`"
                            :src="company.image" :alt="company.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import WorkExperience from '@/config/portfolio/work_experience.js'
</script>
