<template>
  <div class="details" v-if="classified">
    <div>{{classified.listingType}}</div>
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
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    const route = useRoute()
    const router = useRouter()

    async function getClassifiedById() {
      try {
        await classifiedsService.getClassifiedById(route.params.id)
      } catch (error) {
        Pop.error('Sorry that listing no longer exists', '[GettingClassified]')
        router.push({ name: 'Home' })
      }
    }

    onMounted(() => {
      getClassifiedById()
    })

    return {
      classified: computed(() => AppState.activeClassified)
    }
  }
}
</script>
