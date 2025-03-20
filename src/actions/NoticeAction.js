import ApiClient from "./BaseAction";

class NoticesApi extends ApiClient {
  constructor() {
    super("http://localhost:10003/wp-json/wp/v2");
  }

  getNotices() {
    return this.get("/notice");
  }

  getPinnedNotices() {
    return this.get("/notice", { isPinned: true });
  }
}

export default new NoticesApi();
