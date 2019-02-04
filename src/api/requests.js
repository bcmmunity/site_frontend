export default {
  async getTopArtcicles() {
    const res = await fetch("https://diffind.com/api/Main/getTopArticles");
    return await res.json();
  }
}