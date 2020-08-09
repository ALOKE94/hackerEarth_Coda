<template>
  <div>
    <v-card max-width="250" class="ma-2" style="border-radius: 16px;">
      <v-img height="150" src="../assets/images/Img2.jpg"></v-img>
      <div class="top-right rectangle" style="background-color:#000000">
        <div style="color:#ffffff">Top Right</div>
      </div>

      <v-col class="pa-3">
        <v-row no-gutters align="center">
          <v-col class="ma-0 pa-0">
            <v-card-title class="ma-0 pa-0">
              <div>Cafe Badilico</div>
            </v-card-title>

            <v-icon class="pr-2">mdi-clock</v-icon>

            <span>24 mins</span>
          </v-col>

          <v-icon color="red">mdi-heart</v-icon>
        </v-row>
        <v-card-text class="ma-0 pa-0 pt-2">
          <v-row align="center" class="mx-0"></v-row>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>
      </v-col>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
};
</script>
<style scoped>
.top-right {
  position: absolute;
  top: 0px;
  right: 0px;
}

.rectangle {
  height: 30px;
  width: 150px;
  border-radius: 0px 10px 0px 10px;
  text-align: center;
}
</style>