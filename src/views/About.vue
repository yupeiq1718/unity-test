<template>
  <div class="about">
    <div v-if="unity">
      <div class="unity">
        <div id="unityContainer" class="unity-container"></div>
      </div>
    </div>
    <button @click="change">change</button>
    <button @click="active">unity</button>
  </div>
</template>

<script>
window.UnityToWeb = function (msg) {
  // alert(msg)
}
export default {
  name: 'About',
  data () {
    return {
      unity: true
    }
  },
  methods: {
    change () {
      unityInstance.SendMessage('GameManager', 'LoadScene', String(1))
    },
    active () {
      this.unity = !this.unity
    }
  },
  mounted () {
    window.loadUnity()
  }
}
</script>
