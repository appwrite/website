import { writable } from 'svelte/store';
import {browser} from '$app/environment';
import { Account, Client } from '@appwrite.io/console';

const client = new Client();

client
  .setEndpoint('https://stage.cloud.appwrite.io/v1')
  .setProject('console');

const account = new Account(client);

export const loggedIn = writable(
  browser && localStorage.getItem('appwrite:loggedIn') !== null
);

export const sdk = {client, account};