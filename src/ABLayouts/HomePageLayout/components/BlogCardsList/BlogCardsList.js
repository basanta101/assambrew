import Link from "next/link";
import styles from "./BlogCardsList.module.css";

const BLOG_CARDS_LIST = [
  {
    heading: "The legacy of Assam tea in a nutshell",
    description: "The legacy and the man behind the Assam Tea.",
    // route: "/blog1",
    route: "/blog/1",
    blogDate: "1",
  },
  {
    heading: "Why do you need to switch to Assam tea?",
    description: "Among several antioxidants, Assam tea contains...",
    // route: "/blog2",
    route: "/blog/2",
    blogDate: "2",
  },
  {
    heading: "What makes Assam Tea unique?",
    description: "",
    // route: "/blog3",
    route: "/blog/3",
    blogDate: "3",
  },
];

const BlogListHeaderText = "Tea Talks";

const BlogCardsList = () => {
  return (
    <section>
      <h2>{BlogListHeaderText}</h2>
      <div style={{ border: "1px solid red", display: "flex" }}>
        {BLOG_CARDS_LIST.map((blogCard) => {
          return (
            <Link key={blogCard.blogDate} href={blogCard.route}>
              <div
                style={{
                  height: "300px",
                  width: "200px",
                  border: "1px solid red",
                }}
                key={blogCard.blogDate}
              >
                <h2>{blogCard.heading}</h2>
                <p>{blogCard.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BlogCardsList;
