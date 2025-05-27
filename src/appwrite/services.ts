import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';

import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

console.log('Appwrite Endpoint:', APPWRITE_ENDPOINT);
console.log('Appwrite Project ID:', APPWRITE_PROJECT_ID);

if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
  throw new Error('Appwrite configuration is missing loda pakadle');
}

type createUserAccount = {
  email: string;
  password: string;
  name: string;
};

type loginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }

  async createAccount({email, password, name}: createUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: 'Error creating account',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
      });
      throw error;
    }
  }

  async login({email, password}: loginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: 'Error logging in',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#FF0000',
      });
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Error getting current user', error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      console.log('Error logging out', error);
    }
  }
}

export default AppwriteService;
