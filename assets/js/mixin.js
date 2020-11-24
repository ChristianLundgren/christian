Vue.mixin({

  computed: {
    // Returns false by default. Show logo image by returning a string of path to the image file.
    logoImageUrl() {
      return siteData.logoImageUrl || false;
    },
    projectTitle() {
      return siteData.projectTitle;
    },
    templateName() {
      return siteData.templateName;
    },
    siteSettings_navigation() {
      return siteData.siteSettings_navigation;
    },
    siteEmail() {
      return siteData.siteEmail;
    },
    // * Returning false will hide those SNS icons.
    facebookPageName() {
      return siteData.facebookPageName;
    },
    instagramAccountName() {
      return siteData.instagramAccountName;
    },
    twitterAccountName() {
      return siteData.twitterAccountName;
    },
    youtubeChannelUrl() {
      return siteData.youtubeChannelUrl;
    },
    cookieConsent() {
      return siteData.cookieConsent;
    },
    // * read from App.vue
    copyrightStatement() {
      return siteData.copyrightStatement;
    },
    blocks() {
      return this.$root.pageData.blocks || [];
    }
  },
  methods: {
    pageUpdatedSequencer() {
      // run timber script
      const _findIdBySlug = (slug) => {
        const _foundData = siteData.pages.find(element => element.slug == slug);
        return _foundData.id;
      };
      // find the id of current page by router's pageSlug. Empty means home.
      const _pageSlug = this.$route.params.pageSlug || "";
      const _pageId = _findIdBySlug(_pageSlug);
      // find page data by id
      // if found return page data
      // if not found , return 404 page
      const _getBlockByPageId = (pageId) => {
        const _pageData = siteData.pages.find(element => element.id == pageId);
        if (_pageData) {
          return _pageData;
        } else {
          return {
            blocks: [
              {
                "data": {
                  "text": "404"
                },
                "type": "paragraph"
              },
            ]
          };
        }

      };
      // set the blocks
      this.$root.pageData = _getBlockByPageId(_pageId);
    },
    getPageSlug(pageId) {
      const _pageData = siteData.pages.find(element => element.id == pageId);
      return _pageData.slug;
    }
  }
});
