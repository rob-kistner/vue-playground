Vue.component('tabs', {
  template: '#tabs',
  name: "tabs",
  data() {
    return {
      activeTab: 'tab-3',
    }
  },
  props: {
  },
  methods: {
    activateTab: function(tabId) {
      this.activeTab = tabId
    },
    resizeContentBacker: function() {
      const backer = this.$refs['tab-content-backer']
      const rect = this.getContentDims()
      backer.style.width = rect.width
      backer.style.height = rect.height
    },
    getContentDims: function() {
      const rect = this.$refs[`${this.activeTab}-content`].getBoundingClientRect()
      return {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      }
    }
  },
  computed: {

  },
  mounted() {
    // this.resizeContentBacker()
  },
  watch: {

  }
})

var vm = new Vue({ el: '#app' })
