import { Button } from "./button";

interface ImageCardProps {
  authorName: string;
  imgSource: string;
  height: number;
  width: number;
}
const HeartIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org">
  <path
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
export const ImageCard = ({ authorName, imgSource, height, width }: ImageCardProps) => {

  return <div className="rounded-sm flex flex-col relative overflow-clip aspect-square focus:shadow-md shadow-zinc-700 shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out">
    {/* Header - By: <AUTHOR_NAME> */}
    <div className="absolute top-0 left-0 right-0">
      <p className="mx-2">
        By: {authorName}
      </p>
    </div>
    <div className="h-full flex items-center">
      <img
        src={imgSource}
        height={height}
        width={width}
      />
    </div>
    {/* Footer Favourites Button */}
    <div className="absolute bottom-0 left-0 right-0 flex justify-end p-2">
      <Button className="bg-black text-white">
        <HeartIcon />
      </Button>
    </div>
  </div>
}