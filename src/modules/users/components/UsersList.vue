<template>
  <div>
    <h2>Test users list</h2>
    <p>
      This is the very secret list of users.
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button>new user</el-button>
    <el-table :data="users" row-key="idUser">
      <el-table-column prop="firstName" label="First name"/>
      <el-table-column prop="lastName" label="Last name"/>
      <el-table-column prop="gender" label="Gender"/>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class UsersList extends Vue {
  private fetchUsers() {
    this.$store.dispatch("users/getUsers");
  }

  get users() {
    return this.$store.state.users.users;
  }

  mounted() {
    this.fetchUsers();
  }
}
</script>

<style></style>
