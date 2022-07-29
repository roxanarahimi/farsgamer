<template>
  <button class="btn btn-primary py-1 px-4 fw-bold" type="submit">
      <slot />
  </button>
</template>

<script>
export default {
  name: "BtnPrimaryShadow"
}
</script>

<style scoped>
button{
  height: 42px;
  min-width: 140px;
  border-radius: 8px;
  background-image: conic-gradient(from 30deg, #7007FA 10%, #9d56ff 120%, #7007FA 100%);

}
</style>