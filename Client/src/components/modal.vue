<template>
  <div>
    <b-modal ref="myModalRef" id="modallg" size="lg" :title="name" hide-footer>
      <b-tabs>
        <b-tab :title="item.group" v-for="item in menuList" :key="item.restaurantId">
          <!-- v-for="item2 in item.values" :key="item2.restaurantId" -->
          <div class="row">
            <div class="col-md-6" v-for="item2 in item.values" :key="item2.restaurantId">
              <div class="card text-left mb-2 ">
                <img :src="item2.image" height="200" v-if="item2.image">
                <img src="../assets/logo.jpg" height="200" v-else>
                <div class="card-body">
                  <h5 class="card-title">{{item2.name}}</h5>
                  <p class="card-text" v-if="item2.price" > Preço: R$ {{Number.parseFloat(item2.price).toFixed(2)}}</p>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </b-modal>
  </div>
</template>

<script>
import RestaurantApi from "@/services/RestaurantApi";

export default {
  data() {
    return {
      showModal: false,
      name: "",
      menuList: [],
      groupList: [{}]
    };
  },
  methods: {
    show(id, name) {
      this.$refs.myModalRef.show();
      this.name = name;
      RestaurantApi.getOne(id).then(rests => {
        this.menuList = Object.values(
          rests.reduce((result, { group, name, image, price }) => {
            if (!result[group])
              result[group] = {
                group,
                values: []
              };
            result[group].values.push({
              name,
              image,
              price
            });
            return result;
          }, {})
        );
        console.log(this.menuList);
      });
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  }
};
</script>
<style scoped>

</style>

