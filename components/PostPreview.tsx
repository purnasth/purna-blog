import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="border border-slate-200 p-7 rounded-md shadow-md bg-light-green-clr"
    >
      <h2 className="font-bold text-bg-clr underline hover:italic transition-all duration-3000 ease-linear">
        {props.slug}
      </h2>
      <p className="text-md text-slate-600">{props.subtitle}</p>
      <div className="flex items-center justify-between">
        <p className="text-slate-500">{props.author}</p>
        <p className="text-slate-500">{props.date}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
