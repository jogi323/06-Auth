export class Search {
    content: string;
    contentType: string;
    username: string;
    searchId?: string;
    userId?: string;

    constructor(content: string, contentType:string,  username: string, searchId?: string, userId?: string) {
        this.content = content;
        this.contentType = contentType;
        this.username = username;
        this.searchId = searchId;
        this.userId = userId;
    }
}