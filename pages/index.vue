<template>
  <div
    class="flex md:flex-row flex-col justify-center items-center mx-auto max-w-md h-full relative md:max-w-5xl gap-x-6 overflow-hidden"
  >
    <div
      class="md:left-0 md:top-0 md:bottom-0 top-0 mx-auto p-4 md:w-1/4 bg-gray-900 text-white md:min-h-screen w-full md:fixed"
    >
      <!-- Sidebar content -->

      <!-- Tables of content using tailwindcss eg databses, coding -->
      <div class="w-full max-w-xs">
        <ul class="list-disc ml-4">
          <li><a href="#databases">Databases</a></li>
          <li><a href="#coding">Coding</a></li>
        </ul>
      </div>

      <div id="databases">
        <h2>Databases</h2>
        <p>Here's some information about databases.</p>
      </div>

      <div id="coding">
        <h2>Coding</h2>
        <p>Here's some information about coding.</p>
      </div>
    </div>
    <div class="md:w-3/4 w-full md:-left-96 overflow-hidden sticky inset-y-0 mx-auto">
      <!-- Main content -->
      <div class=" ">
        <ais-instant-search :index-name="indexName" :search-client="algolia">
          <ais-search-box
            class="w-full px-4 py-2 rounded-md border-gray-300 border focus:outline-none focus:border-indigo-500"
          />
          <ais-hits>
            <template #default="{ items }">
              <div
                class="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-2"
                v-if="items"
              >
                <div
                  v-for="item in items"
                  :key="item.objectID"
                  class="bg-white rounded shadow-black shadow-lg p-3"
                >
                  <div class="flex justify-center items-center mx-auto flex-col">
                    <h2>{{ item.channelName }}</h2>
                    <p>{{ item.videoName }}</p>
                    <div class="">
                      <!-- Artist name -->
                      <iframe
                        class="responsive-video"
                        :src="`https://www.youtube.com/embed/${vid}?controls=1&rel=0`"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <p>No results found.</p>
              </div>
            </template>
          </ais-hits>
        </ais-instant-search>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .flex {
    margin-left: 25%; /* width of the sidebar */
  }
}
</style>

<script setup>
import { ref } from "vue";
import { AisInstantSearch, AisSearchBox, AisHits } from "vue-instantsearch/vue3/es";
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/algolia.css";

const indexName = ref("MANAGER");
const vid = ref("iwRneX7GIGI");
const algolia = useAlgoliaRef();
</script>
<style>
.videos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.video-wrapper {
  position: relative;
  width: 48%;
  padding-bottom: 56.25%;
  height: 0;
}
.responsive-video {
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .video-wrapper {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
