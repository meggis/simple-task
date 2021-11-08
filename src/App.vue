<template>
  <b-container>
    <div id="App">
      <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>
      <sidebar-menu :menu="menu_items">
      </sidebar-menu>
      <!-- <div id="nav">
      <router-link to="/currency">Add currency</router-link>
      <router-link to="/table">Currency table</router-link>
      <router-link to="/converter">Exchange converter</router-link>
    </div> -->
      <router-view />
    </div>
  </b-container>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
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
          title: "Menu",
          hiddenOnCollapse: true,
        },
        {
          href: "/currency",
          title: "Add currency",
          icon: 'fas fa-plus'
        },
        {
          href: "/table",
          title: "Currency table",
          icon: "fas fa-table"
        },
        {
          href: "/converter",
          title: "Exchange converter",
          icon: "fas fa-sync-alt"
        },
      ],
    };
  },
};
</script>


