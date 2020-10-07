import Application from 'ember-firebase-auth-demo/app';
import config from 'ember-firebase-auth-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
