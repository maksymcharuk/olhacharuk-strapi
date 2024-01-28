import ShareButton from "../extensions/components/ShareButton";

export default {
  bootstrap(app) {
    app.injectContentManagerComponent("listView", "actions", {
      name: "ShareButton",
      Component: ShareButton,
    });
  },
};