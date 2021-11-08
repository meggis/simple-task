<template>
  <div class="about">
    <h1>"Currency table" page</h1>
    <table>
      <tr>
        <th>Currency</th>
        <th>Exchange converter</th>
      </tr>
      <tr v-for="(key, value) in allCurrencies" :key="key.id">
        <td>{{ key }} {{ value }}</td>
      </tr>
    </table>
    <!-- <p>{{ exchangeRate }}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['allCurrencies'])}
  }
</script>
