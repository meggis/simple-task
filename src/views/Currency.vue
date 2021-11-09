<template>
  <div class="border rounded p-5">
    <h1>"Add currency" page</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Select currency:"
        label-for="input-1"
      >
        <b-form-select
          style="width: 100%"
          id="input-1"
          v-model="currency"
          :options="getCurenciesAsOptions"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="Type value:" 
        label-for="input-2"
        >
        <b-form-input
          v-model="exchangeRate"
          id="input-2"
          type="number"
          placeholder="Enter value"
          required
        ></b-form-input>
      </b-form-group>
      <b-button @click="addCurrencyValue">Save</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      currency: null,
      exchangeRate: null,
    };
  },
  computed: {
    ...mapGetters(["getCurenciesAsOptions"]),
  },
  methods: {
    addCurrencyValue() {
      this.$store.commit("setCurrencyValues", { currency: this.currency, exchangeRate: this.exchangeRate })
    }
  }
};
</script>