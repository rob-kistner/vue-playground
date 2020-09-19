<template>
  <h1>VueJS 3 Examples</h1>
  <div>
    <button @click="toggleModalState">Open Modal</button>
  </div>
  <counter />
  <teleport to="#modal-wrapper">
    <modal v-if="modalOpen" @close="toggleModalState">
      <p>Hello, I'm a modal window</p>
      <p>A praesent viverra aenean est vel placerat condimentum sapien dignissim, sem venenatis cubilia habitant metus quis felis justo, ornare montes aptent sed porttitor class ad primis. Sem diam quisque praesent porttitor imperdiet elementum nostra morbi in, dolor ex venenatis natoque consequat consectetur metus.</p>
    </modal>
  </teleport>
</template>

<script>
/**
 * NOTE: '<teleport..>' above allows the rendered content to go
 * to a different element other than the Vue target '#app' element
 * on the page. This would allow the modal to have a background cover
 * div without interferring with the rest of the interface, for example
 */
import Modal from "./components/Modal.vue";
import Counter from "./components/Counter.vue";
import { ref } from "vue";

export default {
  setup() {
      // 'ref' sets up a reactive variable,
      // making it the equivelent of 'this.modalOpen'
      // ref wraps it in an object, so you'll refer to
      // the value of the variable with '.value'
    const modalOpen = ref(false);
    const toggleModalState = () => {
      modalOpen.value = !modalOpen.value;
    };
      // once returned, the variable and method can
      // be used in the template above
    return {
      modalOpen,
      toggleModalState,
    };
  },
  components: {
    Modal,
    Counter
  },
};
</script>

<style>
</style>