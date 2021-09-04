export default class Youtube {
    constructor(key) {
        this.key = key;
        this.base = 'https://www.googleapis.com/youtube/v3'
        this.requestOpts = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async popular() {
        const response = await fetch(`${this.base}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.requestOpts);
        const data = await response.json();
        return data.items;
    }

    async search(keyword) {
        const response = await fetch(`${this.base}/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=${this.key}`, this.requestOpts);
        const data = await response.json();
        return data.items;
    }
}