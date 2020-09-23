<template>
  <div class="about">
    <unity v-if="active" src="Build/20200918_no-wasm.json" unityLoader="Build/UnityLoader.js" ref="myInstance" :hideFooter= "true"></unity>
    <button @click="change">change</button>
    <button @click="unity">active</button>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'

window.UnityToWeb = function (msg) {
  // alert(msg)
}
export default {
  name: 'About',
  data () {
    return {
      active: true
    }
  },
  components: { Unity },
  methods: {
    change () {
      this.$refs.myInstance.message('GameManager', 'LoadScene', String(1))
    },
    unity () {
      this.active = !this.active
    }
  }
}
</script>
