<template>
  <div class="component">
    <div clas="row justify-content-center scrollme">




    </div>

  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.vue";
import { classifiedsService } from "../services/ClassifiedsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {

    onMounted(() => GetClassifieds())

    async function GetClassifieds() {
      try {
        await classifiedsService.getClassifieds()
      } catch (error) {
        console.error('[getClassifieds]', error)
        Pop.error(error)
      }
    }


    return {
      cars: computed(() => AppState.cars),
    };
  },
  components: { CarCard }
}
</script>


<style lang="scss" scoped>

</style>