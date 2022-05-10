<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="jobs">
    <router-link :to="{name: 'jobDetails', params: { id: job.id}}">
        <h2>{{job.title}}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return{
            jobs: [
                {title: 'Frontend Developer', id: 1, details: 'lorem'},
                {title: 'Backend Developer', id: 2, details: 'lorem'},
                {title: 'Blockend Developer', id: 3, details: 'lorem'},
            ]
        }
    }
}
</script>

<style>
    .jobs h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .jobs h2:hover {
        background: #ddd;
    }
    .jobs a{
        text-decoration: none;
    }
</style>