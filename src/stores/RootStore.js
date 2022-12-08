import CommentsStore from './CommentsStore';

export default class RootStore {
  constructor() {
    this.CommentsStore = new CommentsStore();
  }
}
