<template>

  <div class="details" v-if="classified">
    <div class="col-12 d-flex justify-content-center">
      <h4>{{classified.listingType}}</h4>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <h5 class="border border-dark"> Year:{{classified.listing.year}}</h5>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <h4>Price:${{classified.listing.price}}</h4>

    </div>
    <div class="col-12 d-flex justify-content-end ">
      <p>{{classified.listing.description}} </p>
    </div>

    <div class="col-5 " v-if="classified.listingType == 'Car'">
      <CarCard :car="classified.listing" :seller="classified.seller" />

    </div>



  </div>
  <div v-else>
    loading...
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    async function getClassifiedById() {
      try {
        await classifiedsService.getClassifiedById(route.params.id);
      }
      catch (error) {
        Pop.error("Sorry that listing no longer exists", "[GettingClassified]");
        router.push({ name: "Home" });
      }
    }
    onMounted(() => {
      getClassifiedById();
    });
    return {
      classified: computed(() => AppState.activeClassified),

    };
  },
  components: { CarCard }
}
</script>
<style scoped lang="scss">
.row {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFDQP3J-Abc81uRy4UR2hh1Rv59MaZIJVgA&usqp=CAU");
  background-position: center;

}
</style>