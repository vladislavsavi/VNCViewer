export class QuestEditorState {
    editorState = null;

    constructor (init) {
      if (init) {
        Object.assign(this, init);
      }
    }
}
