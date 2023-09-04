import React from "react";
import Image from "next/image";
import moment from "moment/moment";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="mb-3">
      <Link href={`/blog/${blog.slug}`} scroll={true}>
        <div className="aspect-video relative mb-3 overflow-hidden group">
          <Image
            src={blog?.img}
            alt={blog?.title}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-300"
            sizes="100%"
            placeholder="blur"
          />
        </div>
      </Link>
      <Link
        href={`/blog/${blog.slug}`}
        scroll={true}
        className="font-bold text-lg"
      >
        {blog?.title}
      </Link>
      <p className="mb-2">{blog?.description}</p>
      <p className="text-sm text-slate-400">
        {moment(blog?.uploaded_date).format("MMM DD YYYY")}, {blog?.read_time}{" "}
        Read
      </p>
    </div>
  );
};

export default BlogCard;
