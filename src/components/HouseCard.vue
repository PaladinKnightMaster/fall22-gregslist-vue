<template>
  <div class="component">
    <div class="card">
      <img class="rounded-top forcedImg" :src="house.imgUrl" :alt="house.imgUrl">
      <div class="card-body d-flex justify-content-between align-items-center">
        <h5>BedRoom:{{ house.bedrooms }}/ Bathrooms:{{ house.bathrooms }}/ Levels:{{ house.levels }}/ ${{ house.price }}
        </h5>

        <p>{{ house.description }}</p>
        <div class="align-items-center d-flex gap-2">
          <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="30" class="rounded">
          <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click.stop="$emit('deleteClassified')"
            v-if="account.id == seller.id"></i>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { SellerProfile } from "../models/SellerProfile.js";

export default {
  props: {
    house: { type: House, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup(props, { emit }) {
    return {
      account: computed(() => AppState.account),
      deleteClassified() {
        emit('deleteClassified')
      }

    }
  }
}
</script>


<style lang="scss" scoped>

</style>