<template>
  <div style="background-color:#f8f8ff" class="applyPadding">
    <div class="topright">
      <img src="../assets/images/Illustration2.png" width="180px" height="150px" />
    </div>
    <div class="bottomleft">
      <img src="../assets/images/Illustration1.png" width="180px" height="150px" />
    </div>

    <div class="bottomright">
      <img src="../assets/images/Illustration4.png" width="180px" height="150px" />
    </div>
    <div class="middle">
      <img src="../assets/images/Illustration5.png" width="100px" height="100px" />
    </div>
    <div class="rightmiddle">
      <img src="../assets/images/Illustration5.png" width="50px" height="50px" />
    </div>
    <v-row no-gutters align="center" style="padding-top:50px;margin-bottom:50px">
      <img src="../assets/Icons/Icon feather-search.png" width="20px" height="20px" />Search your recepie here
    </v-row>
    
<v-card-actions>
  <v-spacer></v-spacer>
  <div style="padding-right:190px;font-size:30px">Pizza & Noodles</div>
</v-card-actions>
    

    <div no-gutters>
      <div v-for="item in result" :key="item">
        <FoodCard :resultData="item"></FoodCard>
      </div>
    </div>
  </div>
</template>

<script>
import FoodCard from "@/components/foodCard.vue";

export default {
  name: "HelloWorld",
  components: {
    FoodCard,
  },

  data: () => ({
    result: {},
  }),
  methods: {
    callApi() {
      fetch("http://starlord.hackerearth.com/recipe", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
          }
        })
        .then((response) => {
          this.result = response;
          console.log(this.result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.callApi();
  },
};
</script>

<style scoped>
.topright {
  position: fixed;
  top: -50px;
  right: -30px;
}
.bottomleft {
  position: fixed;
  bottom: -50px;
  left: -30px;
}

.middle {
  position: fixed;
  bottom: 100px;
  left: 100px;
}
.rightmiddle {
  position: fixed;
  bottom: 100px;
  right: 100px;
}
.bottomright {
  position: fixed;
  bottom: -40px;
  right: -25px;
}

.applyPadding {
  padding-bottom: 150px;
  padding-left: 150px;
  padding-right: 150px;
}
</style>
