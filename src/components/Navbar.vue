<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
  >
    <el-menu-item index="1" route="/">Defaut</el-menu-item>
    <el-menu-item index="2" route="/users">Users</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style></style>
