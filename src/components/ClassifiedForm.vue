<template>
  <form @submit.prevent="handleSubmit">

    <div>
      <label for="listingType">What are you Selling?</label>
      <select name="listingType" v-model="editable.listingType">
        <option value="Car">🚗</option>
        <option value="Job">💼</option>
        <option value="House">🏠</option>
      </select>
    </div>


    <div v-if="editable.listingType == 'Car'">
      <div class="form-group">
        <label for="make">Make:</label>
        <input type="text" v-model="editable.listing.make" placeholder="Make" required class="form-control">
      </div>
      <div class="form-group">
        <label for="model">Model:</label>
        <input type="text" v-model="editable.listing.model" placeholder="Model" required class="form-control">
      </div>
      <div class="form-group">
        <label for="model">ImgUrl:</label>
        <input type="url" v-model="editable.listing.imgUrl" placeholder="https://youknow.com" class="form-control">
      </div>
      <div class="form-group">
        <label for="price">price:</label>
        <input type="number" v-model="editable.listing.price" placeholder="Price" required class="form-control" min="0">
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="number" v-model="editable.listing.year" placeholder="Year" required class="form-control" min="1886"
          :max="new Date().getFullYear() + 1">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="editable.listing.description" placeholder="description" class="form-control"
          rows="4"></textarea>
      </div>
    </div>

    <div v-else-if="editable.listingType == 'Job'">
      <h1>TODO</h1>
    </div>

    <div class="house-form text-dark" v-if="placeholder == true">
      <form onsubmit="app.housesController.handleSubmit()">

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="bedrooms" required minlength="3" value="${editable.bedrooms}">
          <label for="bedrooms">Bedrooms</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="bathrooms" value="${editable.bathrooms}">
          <label for="bathrooms">Bathrooms</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="levels" required min="1" value="${editable.levels}">
          <label for="levels">Levels</label>
        </div>

        <div class="form-floating mb-3">
          <input type="url" class="form-control" name="imgUrl" value="${editable.imgUrl}">
          <label for="imgUrl">Picture!</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="year" required max="9999" value="${editable.year}">
          <label for="year">Year</label>
        </div>

        <div class="form-floating mb-3">
          <input type="number" class="form-control" name="price" required min="0" value="${editable.price}">
          <label for="price">Price</label>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="Describe your Listing"
            name="description">${editable.description}</textarea>
          <label for="description">Description</label>
        </div>

        < class="d-flex my-4 gap-5 align-items-center">
          <button class="btn" type="reset">Cancel</button>
          <button class="btn btn-primary" type="submit">${
            editable.id ? 'Save Changes' : 'Create'
            } </button>
      </form>
    </div>



    <div class="my-3" v-if="editable.listingType">
      <button class="btn btn-success" type="submit">SEND IT</button>
    </div>


  </form>
</template>


<script>
import { ref } from 'vue';
import { classifiedsService } from '../services/ClassifiedsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({
      listing: {}
    })
    return {
      editable,
      async handleSubmit() {
        try {
          const formData = editable.value
          await classifiedsService.createClassified(formData)
          editable.value = {
            listing: {}
          }
        } catch (error) {
          Pop.error(error, '[Submitting Form]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
