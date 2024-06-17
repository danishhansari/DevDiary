import Avatar from "./Avatar";

interface BlogCardProp {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProp) => {
  return (
    <div className="border-b p-4">
      <div className="flex items-center gap-4">
        <Avatar name={authorName} />
        {authorName}, {publishedDate}
      </div>
      <div className="font-semibold text-xl ">{title}</div>

      <div className="text-md font-normal">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-400 mt-4">{` ${Math.ceil(
        content.length / 100
      )} mins`}</div>
    </div>
  );
};

export default BlogCard;
