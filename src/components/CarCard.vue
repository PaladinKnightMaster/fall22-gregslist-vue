<template>
  <div class="card">
    <img class="rounded-top forcedImg" :src="car.imgUrl" :alt="car.make">
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5>{{ car.make }} {{ car.model }}</h5>
      <div class="align-items-center d-flex gap-2">
        <img :src="seller.picture" :alt="seller.name" :title="seller.name" height="30" class="rounded">
        <i class="mdi mdi-delete-forever fs-4 selectable rounded" @click.stop="$emit('deleteClassified')"
          v-if="account.id == seller.id"></i>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Car } from '../models/Car.js';
import { SellerProfile } from '../models/SellerProfile.js';

export default {
  props: {
    car: { type: Car, required: true },
    seller: { type: SellerProfile, required: true }
  },
  setup(props, { emit }) {

    onMounted(() => {
      console.log('neat huh???')
    })


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
.cardText:hover {
  filter: brightness(114%);
  border-bottom: 4px solid red;
  text-decoration: underline red;
  transition: all 0.5s ease;
}

.card:hover {
  filter: brightness(90%);
  transition: all 0.5s ease;
  box-shadow: rgba(46, 49, 240, 0.4) 5px 5px, rgba(46, 169, 240, 0.3) 10px 10px,
    rgba(30, 20, 1, 0.2) 15px 15px, rgba(88, 46, 240, 0.1) 20px 20px;
}

.forcedImg {
  height: 300px;
  width: auto;
  object-fit: cover;
}
</style>
