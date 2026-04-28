'use client'

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

const AboutPage = () => {

    const [data, setData] = useState();
    const [error, setError] = useState<{ message: string } | null>(null);

    useEffect(() => {
        (
            async () => {
                const { data, error } = await getBlogs()
                setData(data);
                setError(error);
            }
        )()
    }, [])

    return (
        <div>
            <h1>This is about page {data}</h1>
        </div>
    );
};

export default AboutPage;