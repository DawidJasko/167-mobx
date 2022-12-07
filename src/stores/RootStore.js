import CommentsStore from './CommentsStore';

export default class RootStore {
  constructor() {
    this.commentStore = new CommentsStore();
  }
}
