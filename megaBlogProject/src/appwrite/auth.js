import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";



export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }
    async createAccount(email, password, name, dateofbirth, gender) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, dateofbirth, gender);
            if(userAccount)
            {
                // Call another method
                this.login(email, password);

            }
            else
            {
                return userAccount
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            if (user) {
                return user;
            } else {
                console.error("No user found.");
                return null;
            }
        } catch (error) {
            console.error("Error getting current user:", error);
            throw error 
        }
    }
    
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }

    async foggotPassword(email) {
        try {
            return await this.account.createRecovery(email, conf.appwriteUrl + "/reset-password", true);
        } catch (error) {
            console.error("Error sending recovery email:", error);
            throw error;
        }
    }
}
const authService = new AuthService();

export default authService;