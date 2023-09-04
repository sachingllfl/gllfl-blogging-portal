"use client";
import { dummyData } from "@/app/utils/dummyData";
import Image from "next/image";
import { useEffect, useState } from "react";
import DETAILIMG from "@/app/assets/blog/blogs/detail.png";
import moment from "moment";
import BlogGrid from "@/app/components/Blog/BlogGrid";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Breadcrums from "@/app/components/Breadcrums";

// async function getData() {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!resp.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return resp.json();
// }

export function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);
  return null;
}

export default function Page({ params }) {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (params.slug) {
      const filterData = dummyData.find((item) => {
        return item.slug === params.slug;
      });
      setBlog(filterData);
    }
  }, [params.slug]);
  if (blog) {
    return (
      <>
        <ScrollUp />
        <Breadcrums>
          <Link href={""}>Blog</Link> <FiChevronRight />
          {blog?.title}
        </Breadcrums>
        <section className="pt-0 pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="aspect-video mb-4">
              <Image
                src={DETAILIMG}
                width={"auto"}
                height={"auto"}
                style={{ width: "100%" }}
                alt={blog?.title}
                priority={true}
              />
            </div>
            <h6 className="text-2xl font-bold mb-2">{blog?.title}</h6>
            <p className="text-xs mb-4">
              {moment(blog?.uploaded_date).format("MMM DD YYYY")},{" "}
              {blog?.read_time} Read
            </p>
            <div className="space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, libero, rem fugit voluptate distinctio numquam sit
                ipsum quam repellat aliquid illo magni modi velit aut, vitae
                quis esse provident in!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                ipsa reiciendis repudiandae iste? Vero, assumenda tenetur fugiat
                rem earum totam fuga enim voluptates tempore ratione nisi amet
                excepturi ab ipsam similique alias suscipit sint? Laudantium
                voluptatem deserunt qui, veritatis animi perferendis ratione
                porro libero suscipit doloribus dolore accusamus nesciunt, ipsa
                doloremque. Animi vitae, suscipit facilis nam neque placeat
                quasi autem in nulla necessitatibus aut. Facilis inventore
                asperiores cumque, aspernatur quasi totam, id dolores possimus
                in eius officia reprehenderit illum sit architecto maiores
                minima eveniet. Sapiente, itaque doloremque! Aspernatur, illum,
                consectetur architecto iusto porro corporis nihil itaque animi
                molestias laborum beatae.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                eveniet repellat ea officia exercitationem architecto ipsa ipsum
                consectetur libero voluptatibus. Voluptates temporibus rerum
                esse incidunt numquam porro iusto vitae facere?
              </p>
            </div>
          </div>
        </section>
        <section className="bg-slate-100 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h6 className="font-semibold text-2xl text-center mb-6">
              Related Posts
            </h6>
            <BlogGrid data={dummyData?.slice(0, 3)} />
          </div>
        </section>
      </>
    );
  }
}
