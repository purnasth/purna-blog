import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const PostPreview =(props: PostMetadata) => {
    return <div className="border border-slate-200 p-7 rounded-md shadow-md bg-white">
            <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-red-500 hover:underline">{props.slug}</h2>
            </Link>
            <p className="text-md text-slate-600">{props.subtitle}</p>
            <p className="text-slate-500">{props.date}</p>
        </div>
};

export default PostPreview;