import ApiClient from "./BaseAction";

class NoticesApi extends ApiClient {
  constructor() {
    super("https://cms.allnepalclinic.com/wp-json/wp/v2");
  }

  getNotices() {
    return this.get("/notice?_embed");
  }

  getPinnedNotices() {
    return this.get("/notice", { isPinned: true });
  }
}

export default new NoticesApi();
