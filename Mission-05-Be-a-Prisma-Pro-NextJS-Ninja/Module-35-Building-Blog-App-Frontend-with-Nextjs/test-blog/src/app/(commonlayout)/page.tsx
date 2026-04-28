// import { userService } from "@/services/user.service";

import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types/blog.type";

export default async function Home() {
    // const { data } = await userService.getSession();
    // console.log(data);
    const { data } = await blogService.getBlogPosts(
        {
            isFeatured: true,
            search: "dlafjaoidj"
        },
        {
            revalidate: 10,
        }
    );
    console.log(data);

    return (
        <div className="mt-20">
            <h1>Welcome user</h1>
            <div className="grid grid-cols-3 container mx-auto py-20 space-x-5">
                {data?.data?.map((post: BlogPost) => {
                    <BlogCard key={post.id} post={post} />
                })}
            </div>
        </div>
    );
}
