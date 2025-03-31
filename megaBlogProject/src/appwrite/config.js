import conf from "../conf/conf";
import { Client, ID, Account, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost(title, slug, content, featuredImage, status, userID) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                },
            );
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                },
            );
        } catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;

        } catch (error) {
            console.error("Error deleting post:", error);
            // throw error;
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
        } catch (error) {
            console.error("Error getting post:", error);
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("Error getting posts:", error);
            return false;
        }
    }

    // File Upload Service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file, // File object
            );

        } catch (error) {
            console.error("Error uploading file:", error);
            // return false;
            throw error;
        }
    }

    // Delete File Service
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.error("Error deleting post:", error);
            // throw error;
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )

        } catch (error) {
            console.error("Error Preview post:", error);
            // throw error;
            return false;
        }
    }
}
const service = new Service();
export default service;