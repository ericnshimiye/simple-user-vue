<template>
  <div>
    <h2>Modify user</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

export default class UserEdition extends Vue {
  @Prop() public idUser!: number;
}
</script>

<style></style>
