<template>
  <b-container class="mh-100">
    <b-row class="text-center">
      <b-col class="align-self-center">
        <div class="d-flex align-items-center justify-content-center">
         <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-5">
          <sidebar-menu :menu="menu_items"> </sidebar-menu>
          <router-view />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  name: "App",
  data() {
    return {
      breadcrumb_items: [
        {
          text: "Add currency",
          to: { name: "Add currency" },
        },
        {
          text: "Currency table",
          to: { name: "Currency table" },
        },
        {
          text: "Exchange converter",
          active: true,
        },
      ],
      menu_items: [
        {
          header: true,
          title: "Menu",
          hiddenOnCollapse: true,
        },
        {
          href: "/currency",
          title: "Add currency",
          icon: "fas fa-plus",
        },
        {
          href: "/table",
          title: "Currency table",
          icon: "fas fa-table",
        },
        {
          href: "/converter",
          title: "Exchange converter",
          icon: "fas fa-sync-alt",
        },
      ],
    };
  },
};
</script>

<style>
@import './assets/styles/styles.css';

</style>


