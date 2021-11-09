<template>
  <div class="border rounded p-5">
    <h1>"Currency converter" page</h1>
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Select currency:"
          label-for="input-1"
        >
          <b-form-select
            v-model="selected"
            style="width: 100%"
            id="input-1"
            :options="getSelectedCurrenciesOptions()"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Type value to convert:"
          label-for="input-2"
        >
          <b-form-input
            v-model="amount"
            id="input-2"
            type="number"
            placeholder="Enter value"
            required
          ></b-form-input>
        </b-form-group>
        <b-button :disabled="!selected || !amount" @click="calculate"
          >Convert into PLN</b-button
        >
      </b-form>
    <div v-if="finallys" class="mt-5">
      <h4>Result of you conversion is:</h4>
      <h5>{{ finallys }} PLN</h5>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selected: null,
      amount: null,
      summaryNumber: null,
      finallys: null,
    };
  },
  computed: {
    ...mapState(["allCurrencies"]),
  },
  methods: {
    calculate() {
      this.summaryNumber = this.allCurrencies[this.selected] * this.amount;
      this.finallys = this.summaryNumber.toFixed(2);
    },
    getSelectedCurrenciesOptions() {
      if (!this.allCurrencies) {
        return null;
      }

      const selectedCurrencies = [];
      for (const code of Object.keys(this.allCurrencies)) {
        selectedCurrencies.push({ text: code, value: code });
      }
      return selectedCurrencies;
    },
  },
};
</script>

<style scoped>
h5 {
  color: #0d6efd;
}
</style>
