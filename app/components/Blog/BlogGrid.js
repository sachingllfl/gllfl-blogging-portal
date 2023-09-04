import React from "react";
import BlogCard from "@/app/components/Blog/BlogCard";
const BlogGrid = ({ data }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {data?.length &&
        data.map((blog) => {
          return <BlogCard blog={blog} key={blog?.id} />;
        })}
    </div>
  );
};

export default BlogGrid;
