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

    <el-dialog
      title="Add a user"
      :visible.sync="formVisible"
      @close="closeForm"
    >
      <el-alert
        type="error"
        title="error alert"
        :show-icon="true"
        :closable="false"
        :center="false"
        v-if="gotErrors"
        description="You form contains errors, please fix them and submit."
      />

      <el-form
        :model="form"
        ref="form"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
      >
        <el-form-item
          label="First name"
          prop="firstName"
          :error="errors.firstName"
        >
          <el-input type="text" v-model="form.firstName"></el-input>
        </el-form-item>
        <el-form-item
          label="Last name"
          prop="lastName"
          :error="errors.lastName"
        >
          <el-input type="text" v-model="form.lastName"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email" :error="errors.email">
          <el-input type="text" v-model="form.email"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="formVisible = false">Cancel</el-button>
        <el-button type="primary" @click.native="submitForm">Create</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
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
  public formVisible: boolean = false;

  public form: any = {
    firstName: "",
    lastName: "",
    email: ""
  };

  public openForm() {
    this.formVisible = true;
  }

  private resetForm() {
    this.form.firstName = "";
    this.form.lastName = "";
    this.form.email = "";
    this.$store.dispatch("users/resetUserCreationErrors");
  }

  public closeForm() {
    this.formVisible = false;
    this.resetForm();
  }

  public submitForm() {
    const addUserPromise = this.$store.dispatch("users/addUser", this.form);

    addUserPromise.then(() => {
      this.formVisible = false;
    });
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

  get errors() {
    return this.$store.state.users.userCreationErrors;
  }

  get gotErrors() {
    return Object.keys(this.$store.state.users.userCreationErrors).length > 0;
  }

  mounted() {
    this.fetchUsers();
  }
}
</script>

<style></style>
