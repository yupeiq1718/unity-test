let unityInstance

function loadUnity () {
  unityInstance = UnityLoader.instantiate('unityContainer', 'Build/20200918_no-wasm.json', { onProgress: UnityProgress })
}

// loadUnity()

function UnityToWeb (msg) {
  alert(msg)
}
