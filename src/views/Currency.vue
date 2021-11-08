<template>
  <div>
    <h1>"Add currency" page</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Select currency:"
        label-for="input-1"
      >
        <b-form-select
          id="input-1"
          v-model="currency"
          :options="options"
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
export default {
  data() {
    return {
      currency: null,
      exchangeRate: null,
      options: [
        { text: "Please select currency", value: null },
        { text: "Afghan Afghani", value: "AFA" },
        { text: "Albanian Lek", value: "ALL" },
        { text: "Algerian Dinar", value: "DZD" },
        { text: "Angolan Kwanza", value: "AOA" },
        { text: "Argentine Peso", value: "ARS" },
        { text: "Armenian Dram", value: "AMD" },
        { text: "Aruban Florin", value: "AWG" },
        { text: "Australian Dollar", value: "AUD" },
        { text: "Azerbaijani Manat", value: "AZN" },
        { text: "Bahamian Dollar", value: "BSD" },
        { text: "Bahraini Dinar", value: "BHD" },
        { text: "Bangladeshi Taka", value: "BDT" },
        { text: "Barbadian Dollar", value: "BBD" },
        { text: "Belarusian Ruble", value: "BYR" },
        { text: "Belgian Franc", value: "BEF" },
        { text: "Belize Dollar", value: "BZD" },
        { text: "Bermudan Dollar", value: "BMD" },
        { text: "Bhutanese Ngultrum", value: "BTN" },
        { text: "Bitcoin", value: "BTC" },
        { text: "Bolivian Boliviano", value: "BOB" },
        { text: "Bosnia-Herzegovina Convertible Mark", value: "BAM" },
        { text: "Botswanan Pula", value: "BWP" },
        { text: "Brazilian Real", value: "BRL" },
        { text: "British Pound Sterling", value: "GBP" },
        { text: "Brunei Dollar", value: "BND" },
        { text: "Bulgarian Lev", value: "BGN" },
        { text: "Burundian Franc", value: "BIF" },
        { text: "Cambodian Riel", value: "KHR" },
        { text: "Canadian Dollar", value: "CAD" },
        { text: "Cape Verdean Escudo", value: "CVE" },
        { text: "Cayman Islands Dollar", value: "KYD" },
        { text: "CFA Franc BCEAO", value: "XOF" },
        { text: "CFA Franc BEAC", value: "XAF" },
        { text: "CFP Franc", value: "XPF" },
        { text: "Chilean Peso", value: "CLP" },
        { text: "Chinese Yuan", value: "CNY" },
        { text: "Colombian Peso", value: "COP" },
        { text: "Comorian Franc", value: "KMF" },
        { text: "Congolese Franc", value: "CDF" },
        { text: "Costa Rican ColÃ³n", value: "CRC" },
        { text: "Croatian Kuna", value: "HRK" },
        { text: "Cuban Convertible Peso", value: "CUC" },
        { text: "Czech Republic Koruna", value: "CZK" },
        { text: "Danish Krone", value: "DKK" },
        { text: "Djiboutian Franc", value: "DJF" },
        { text: "Dominican Peso", value: "DOP" },
        { text: "East Caribbean Dollar", value: "XCD" },
        { text: "Egyptian Pound", value: "EGP" },
        { text: "Eritrean Nakfa", value: "ERN" },
        { text: "Estonian Kroon", value: "EEK" },
        { text: "Ethiopian Birr", value: "ETB" },
        { text: "Euro", value: "EUR" },
        { text: "Falkland Islands Pound", value: "FKP" },
        { text: "Fijian Dollar", value: "FJD" },
        { text: "Gambian Dalasi", value: "GMD" },
        { text: "Georgian Lari", value: "GEL" },
        { text: "German Mark", value: "DEM" },
        { text: "Ghanaian Cedi", value: "GHS" },
        { text: "Gibraltar Pound", value: "GIP" },
        { text: "Greek Drachma", value: "GRD" },
        { text: "Guatemalan Quetzal", value: "GTQ" },
        { text: "Guinean Franc", value: "GNF" },
        { text: "Guyanaese Dollar", value: "GYD" },
        { text: "Haitian Gourde", value: "HTG" },
        { text: "Honduran Lempira", value: "HNL" },
        { text: "Hong Kong Dollar", value: "HKD" },
        { text: "Hungarian Forint", value: "HUF" },
        { text: "Icelandic KrÃ³na", value: "ISK" },
        { text: "Indian Rupee", value: "INR" },
        { text: "Indonesian Rupiah", value: "IDR" },
        { text: "Iranian Rial", value: "IRR" },
        { text: "Iraqi Dinar", value: "IQD" },
        { text: "Israeli New Sheqel", value: "ILS" },
        { text: "Italian Lira", value: "ITL" },
        { text: "Jamaican Dollar", value: "JMD" },
        { text: "Japanese Yen", value: "JPY" },
        { text: "Jordanian Dinar", value: "JOD" },
        { text: "Kazakhstani Tenge", value: "KZT" },
        { text: "Kenyan Shilling", value: "KES" },
        { text: "Kuwaiti Dinar", value: "KWD" },
        { text: "Kyrgystani Som", value: "KGS" },
        { text: "Laotian Kip", value: "LAK" },
        { text: "Latvian Lats", value: "LVL" },
        { text: "Lebanese Pound", value: "LBP" },
        { text: "Lesotho Loti", value: "LSL" },
        { text: "Liberian Dollar", value: "LRD" },
        { text: "Libyan Dinar", value: "LYD" },
        { text: "Lithuanian Litas", value: "LTL" },
        { text: "Macanese Pataca", value: "MOP" },
        { text: "Macedonian Denar", value: "MKD" },
        { text: "Malagasy Ariary", value: "MGA" },
        { text: "Malawian Kwacha", value: "MWK" },
        { text: "Malaysian Ringgit", value: "MYR" },
        { text: "Maldivian Rufiyaa", value: "MVR" },
        { text: "Mauritanian Ouguiya", value: "MRO" },
        { text: "Mauritian Rupee", value: "MUR" },
        { text: "Mexican Peso", value: "MXN" },
        { text: "Moldovan Leu", value: "MDL" },
        { text: "Mongolian Tugrik", value: "MNT" },
        { text: "Moroccan Dirham", value: "MAD" },
        { text: "Mozambican Metical", value: "MZM" },
        { text: "Myanmar Kyat", value: "MMK" },
        { text: "Namibian Dollar", value: "NAD" },
        { text: "Nepalese Rupee", value: "NPR" },
        { text: "Netherlands Antillean Guilder", value: "ANG" },
        { text: "New Taiwan Dollar", value: "TWD" },
        { text: "New Zealand Dollar", value: "NZD" },
        { text: "Nicaraguan CÃ³rdoba", value: "NIO" },
        { text: "Nigerian Naira", value: "NGN" },
        { text: "North Korean Won", value: "KPW" },
        { text: "Norwegian Krone", value: "NOK" },
        { text: "Omani Rial", value: "OMR" },
        { text: "Pakistani Rupee", value: "PKR" },
        { text: "Panamanian Balboa", value: "PAB" },
        { text: "Papua New Guinean Kina", value: "PGK" },
        { text: "Paraguayan Guarani", value: "PYG" },
        { text: "Peruvian Nuevo Sol", value: "PEN" },
        { text: "Philippine Peso", value: "PHP" },
        { text: "Polish Zloty", value: "PLN" },
        { text: "Qatari Rial", value: "QAR" },
        { text: "Romanian Leu", value: "RON" },
        { text: "Russian Ruble", value: "RUB" },
        { text: "Rwandan Franc", value: "RWF" },
        { text: "Salvadoran ColÃ³n", value: "SVC" },
        { text: "Samoan Tala", value: "WST" },
        { text: "Saudi Riyal", value: "SAR" },
        { text: "Serbian Dinar", value: "RSD" },
        { text: "Seychellois Rupee", value: "SCR" },
        { text: "Sierra Leonean Leone", value: "SLL" },
        { text: "Singapore Dollar", value: "SGD" },
        { text: "Slovak Koruna", value: "SKK" },
        { text: "Solomon Islands Dollar", value: "SBD" },
        { text: "Somali Shilling", value: "SOS" },
        { text: "South African Rand", value: "ZAR" },
        { text: "South Korean Won", value: "KRW" },
        { text: "Special Drawing Rights", value: "XDR" },
        { text: "Sri Lankan Rupee", value: "LKR" },
        { text: "St. Helena Pound", value: "SHP" },
        { text: "Sudanese Pound", value: "SDG" },
        { text: "Surinamese Dollar", value: "SRD" },
        { text: "Swazi Lilangeni", value: "SZL" },
        { text: "Swedish Krona", value: "SEK" },
        { text: "Swiss Franc", value: "CHF" },
        { text: "Syrian Pound", value: "SYP" },
        { text: "São Tomé and Príncipe Dobra", value: "STD" },
        { text: "Tajikistani Somoni", value: "TJS" },
        { text: "Tanzanian Shilling", value: "TZS" },
        { text: "Thai Baht", value: "THB" },
        { text: "Tongan Pa'anga", value: "TOP" },
        { text: "Trinidad & Tobago Dollar", value: "TTD" },
        { text: "Tunisian Dinar", value: "TND" },
        { text: "Turkish Lira", value: "TRY" },
        { text: "Turkmenistani Manat", value: "TMT" },
        { text: "Ugandan Shilling", value: "UGX" },
        { text: "Ukrainian Hryvnia", value: "UAH" },
        { text: "United Arab Emirates Dirham", value: "AED" },
        { text: "Uruguayan Peso", value: "UYU" },
        { text: "US Dollar", value: "USD" },
        { text: "Uzbekistan Som", value: "UZS" },
        { text: "Vanuatu Vatu", value: "VUV" },
        { text: "Venezuelan BolÃvar", value: "VEF" },
        { text: "Vietnamese Dong", value: "VND" },
        { text: "Yemeni Rial", value: "YER" },
        { text: "Zambian Kwacha", value: "ZMK" },
      ],
    };
  },
  methods: {
    addCurrencyValue() {
      this.$store.commit("setCurrencyValues", { currency: this.currency, exchangeRate: this.exchangeRate })
    }
  }
};
</script>