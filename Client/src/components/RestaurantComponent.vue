<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="item in list" :key="item.id"  @click="openModal(item.id, item.name)">
          <div class="card text-left mb-4 box-shadow">
            <img :src="item.image">
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">{{item.address}}</p>
              <a class="btn btn-primary" @click="openModal(item.id, item.name)">Ver cardápio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal ref="modal"></modal>
  </div>
</template>

<script>
import RestaurantApi from "@/services/RestaurantApi";
import modal from "@/components/modal.vue";
export default {
  name: "Restaurant",
  components: {
    modal
  },
  data() {
    return {
      isModalVisible: false,
      list: []
    };
  },
  created() {
    RestaurantApi.getAll().then(rests => {
      this.list = rests;
    });
  },
  methods: {
    openModal(id, name) {
      this.$refs.modal.show(id, name);
    }
  }
};
</script>

<style scoped>
.btn-primary {
  color: #fff !important ;
}

img {
  max-height: 250px;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: 0.25rem;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
