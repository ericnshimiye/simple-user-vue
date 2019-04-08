<template>
  <div>
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
import { IUserCreationInfo } from "@/modules/users/definitions/userDefinition.ts";

@Component
export default class UserCreationModal extends Vue {
  public formVisible: boolean = false;

  public form: any = {
    firstName: "",
    lastName: "",
    email: ""
  };

  get errors() {
    return this.$store.state.users.userCreationErrors;
  }

  get gotErrors() {
    return Object.keys(this.$store.state.users.userCreationErrors).length > 0;
  }

  public showForm() {
    this.formVisible = true;
  }

  private resetForm() {
    this.form.firstName = "";
    this.form.lastName = "";
    this.form.email = "";
    this.$store.dispatch("users/resetUserCreationErrors");
  }

  public submitForm() {
    const addUserPromise = this.$store.dispatch("users/addUser", this.form);

    addUserPromise.then(() => {
      this.formVisible = false;
    });
  }

  public closeForm() {
    this.formVisible = false;
    this.resetForm();
  }
}
</script>

<style></style>
