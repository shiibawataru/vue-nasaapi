<template>
  <div>
    <div v-for="nasa of nasaList" :key="nasa.date">
      <div>{{ nasa.date }}</div>
      <div>
        <h1>{{ nasa.title }}</h1>
      </div>
      <div>{{ nasa.explanation }}</div>
      <div><img :src="nasa.url" /></div>
    </div>
    <div>from<a href="https://api.nasa.gov/">NASA APIs</a></div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import { Nasa } from "../types/Nasa";

@Component
export default class NasaList extends Vue {
  private nasaList = new Array<Nasa>();

  /**
   * 今日の惑星の情報を取得.
   */
  async created(): Promise<void> {
    const response = await axios.get(
      //api_key=以降に自分で発行したAPIキーを入力
      //api_key=APIキー&YYYY-MM-DDと指定すると他の日の惑星のデータ取得可能
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
    );
    console.log(response);
    const payload = response.data;
    this.nasaList.push(
      new Nasa(payload.date, payload.title, payload.url, payload.explanation)
    );
  }
}
</script>
<style></style>
