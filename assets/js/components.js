// Components
Vue.component('Layout', {
  template: decodeURIComponent(siteData.template_parts.layout.template),
  data() {
    return {
      wrapperClass: "min-h-screen flex flex-col",
    };
  },
});

Vue.component('Header', {
  template: decodeURIComponent(siteData.template_parts.header.template),
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    async directToPage(pageID) {
      // redirect to the next page
      const _pageSlug = this.getPageSlug(pageID);
      // / for homepage (root top)
      await this.$router.push(
        { path: _pageSlug || "/" },
        // onComplete
        () => {
          this.pageUpdatedSequencer(pageID);
        },
        // onAbort
        (error) => error
      );
    },
  },
});

Vue.component('Blocks', {
  template: decodeURIComponent(siteData.template_parts.blocks.template),
  data() {
    return {
      wrapperClass: "flex-1"
    };
  },
});

Vue.component('Footer', { template: decodeURIComponent(siteData.template_parts.footer.template) });
