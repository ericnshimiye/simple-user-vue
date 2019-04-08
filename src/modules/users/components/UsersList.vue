<template>
  <div>
    <h2>Secret users list</h2>
    <p>This is the very secret list of users.</p>
    <el-button @click="openForm">new user</el-button>

    <el-table :data="users" row-key="idUser" empty-text="No user">
      <el-table-column prop="firstName" label="First name" />
      <el-table-column prop="lastName" label="Last name" />
      <el-table-column prop="email" label="Email" />
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

    <UserCreationModal ref="creationModal" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import UserCreationModal from "./UserCreationModal.vue";
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

@Component({
  components: { UserCreationModal }
})
export default class UsersList extends Vue {
  public $refs!: {
    creationModal: UserCreationModal;
  };

  public openForm() {
    this.$refs.creationModal.showForm();
  }

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
