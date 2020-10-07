import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service
  session;

  @service
  firebaseApp;

  @action
  logout() {
    return this.session.invalidate();
  }

  @action
  async login() {
    const auth = await this.firebaseApp.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    return result;
  }
}
