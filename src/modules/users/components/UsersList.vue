<template>
  <div>
    <h2>Test users list</h2>
    <p>
      This is the very secret list of users.
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button>new user</el-button>

    <el-table :data="users" row-key="idUser" empty-text="No user">
      <el-table-column prop="firstName" label="First name" />
      <el-table-column prop="lastName" label="Last name" />
      <el-table-column prop="gender" label="Gender" />
      <el-table-column>
        <template slot-scope="scope">
          <el-button
            size="small"
            type="text"
            @click="removeUserHandler(scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog></el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {
  IElementConfirm,
  IElementMessage
} from "@/components/element-ui-declarations.ts";

// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
declare module "vue/types/vue" {
  interface Vue {
    $confirm: IElementConfirm;
    $message: IElementMessage;
  }
}

@Component
export default class UsersList extends Vue {
  private fetchUsers() {
    this.$store.dispatch("users/getUsers");
  }

  public removeUserHandler(row: any) {
    const fullName = `${row.firstName} ${row.lastName}`;
    const message = `Sure you want to remove ${fullName} forever ?`;
    const title = "Remove user";
    this.$confirm(message, title, {
      type: "warning"
    })
      .then(() => {
        this.$store
          .dispatch("users/deleteUser", { idUser: row.idUser })
          .then(() => {
            this.$message({
              type: "success",
              message: "user was removed successfully."
            });
          });
      })
      .catch((reason: any) => {});
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
