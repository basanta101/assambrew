import styles from "./BlogCardsList.module.css";

const BLOG_CARDS_LIST = [
  {
    heading: "The legacy of Assam tea in a nutshell",
    description: "The legacy and the man behind the Assam Tea.",
    route: "",
    blogDate: "1",
  },
  {
    heading: "Why do you need to switch to Assam tea?",
    description: "Among several antioxidants, Assam tea contains...",
    route: "",
    blogDate: "1",
  },
  {
    heading: "What makes Assam Tea unique?",
    description: "",
    route: "",
    blogDate: "1",
  },
];

const BlogListHeaderText = "Tea Talks";

const BlogCardsList = () => {
  return (
    <section>
      <h2>{BlogListHeaderText}</h2>
      <div style={{ border: '1px solid red', display: 'flex' }}>
        {BLOG_CARDS_LIST.map((blogCard) => {
          return (
            <div
              style={{
                height: "300px",
                width: "200px",
                border: "1px solid red",
              }}
            >
              {" "}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogCardsList;
