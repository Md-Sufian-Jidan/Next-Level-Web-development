import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (data: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId: string) => {
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId
        }
    });
    return result;
};

const getAllPost = async (payloads: { search?: string | undefined}) => {
    console.log("get all post");
    const result = await prisma.post.findMany();
    return result;
};

export const postServices = { createPost, getAllPost };