<template>
  <div>
    <h2>Modify user</h2>

    <el-form
      :model="user"
      ref="user"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form-item
        label="First name"
        prop="firstName"
        :error="errors.firstName"
      >
        <el-input type="text" v-model="firstName"></el-input>
      </el-form-item>
      <el-form-item label="Last name" prop="lastName" :error="errors.lastName">
        <el-input type="text" v-model="user.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email" :error="errors.email">
        <el-input type="text" v-model="user.email"></el-input>
      </el-form-item>
      <el-form-item label="Birth day" prop="birthday" :error="errors.birthday">
        <el-date-picker
          v-model="user.birthday"
          type="date"
          placeholder="Pick a day"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Gender" prop="gender" :error="errors.gender">
        <el-select v-model="user.gender">
          <el-option
            v-for="gender in genders"
            :key="gender.value"
            :label="gender.label"
            :value="gender.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Super user" prop="superUser">
        <el-checkbox v-model="superUser"></el-checkbox>
      </el-form-item>
      <el-form-item label="Province" prop="province" :error="errors.province">
        <el-select v-model="user.provinces">
          <el-option
            v-for="province in provinces"
            :key="province.value"
            :label="province.label"
            :value="province.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button @click="saveUser">Save</el-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { GENDERS, PROVINCES } from "../definitions/common";
import { IUserInfo, DefaultUser } from "../definitions/userDefinition";

@Component({
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("users/setUser", DefaultUser);
    this.$store.dispatch("users/resetUserUpdateErrors", {});
    next();
  }
})
export default class UserEdition extends Vue {
  @Prop() public idUser!: number;

  get user() {
    return this.$store.state.users.currentUser;
  }

  get genders() {
    return GENDERS;
  }

  get provinces() {
    return PROVINCES;
  }

  get errors() {
    return this.$store.state.users.userUpdateErrors;
  }

  public fetchUser() {
    this.$store.dispatch("users/getUser", this.idUser).catch((reason: any) => {
      this.$router.push({ name: "users" });
    });
  }

  get firstName() {
    return this.user.firstName;
  }

  set firstName(value: String) {
    const newUser: IUserInfo = {
      ...this.user,
      firstName: value
    };
    this.$store.dispatch("users/setUser", newUser);
  }

  get lastName() {
    return this.user.lastName;
  }

  set lastName(value: String) {
    const newUser: IUserInfo = {
      ...this.user,
      lastName: value
    };
    this.$store.dispatch("users/setUser", newUser);
  }

  get email() {
    return this.user.email;
  }

  set email(value: String) {
    const newUser: IUserInfo = {
      ...this.user,
      email: value
    };
    this.$store.dispatch("users/setUser", newUser);
  }

  get gender() {
    return this.user.gender;
  }

  set gender(value: String) {
    const newUser: IUserInfo = {
      ...this.user,
      gender: value
    };
    this.$store.dispatch("users/setUser", newUser);
  }

  get province() {
    return this.user.province;
  }

  set province(value: String) {
    const newUser: IUserInfo = {
      ...this.user,
      province: value
    };
    this.$store.dispatch("users/setUser", newUser);
  }

  get superUser() {
    return this.user.superUser;
  }

  set superUser(value: Boolean) {
    const newUser: IUserInfo = {
      ...this.user,
      superUser: value
    };
    this.$store.dispatch("users/setUser", newUser);
  }

  public saveUser() {
    this.$store.dispatch("users/updateUser").then(() => {
      this.$message({
        type: "success",
        message: "user was saved successfully."
      });
    });
  }

  mounted() {
    this.fetchUser();
  }
}
</script>

<style></style>
