import axios from "axios";

export default class PostService {
  static async getInteresting(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
