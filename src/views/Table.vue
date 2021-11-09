<template>
  <div class="border rounded p-5">
    <h1>"Currency table" page</h1>
    <table>
      <tr>
        <th>Currency</th>
        <th>Exchange converter</th>
      </tr>
      <tr v-for="(key, value) in allCurrencies" :key="key.id">
        <td>{{ value }}</td>
        <td>{{ key }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["allCurrencies"]),
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
}
table, th, td {
  border: 1px solid black;
  padding: 8px;
}
th {
  height: 60px;
  background-color: #d8e1ee;
}
</style>
