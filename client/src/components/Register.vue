<template>
   <v-layout>
       <h1>hola</h1>
        <form>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="name"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      v-validate="'required'"
      :items="items"
      v-model="select"
      :error-messages="errors.collect('select')"
      label="Select"
      data-vv-name="select"
      required
    ></v-select>
    <v-checkbox
      v-validate="'required'"
      v-model="checkbox"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
   </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  padding-top: 6em;
}

</style>
