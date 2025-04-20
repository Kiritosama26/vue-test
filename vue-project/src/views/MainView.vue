<template>
<div class="container d-flex ml-0">

    <SideBar/>
    <div class="content flex-1 p-20 pl-0 ml-0">

        <router-view></router-view>

    </div>

</div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
</script>

<style></style>