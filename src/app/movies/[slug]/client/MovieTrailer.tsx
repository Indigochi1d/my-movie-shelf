"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMovieTrailer } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function MovieTrailer({ movieId }: { movieId: string }) {
  const {
    data: movieTrailer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieTrailer", movieId],
    queryFn: () => fetchMovieTrailer(movieId || ""),
  });

  if (isLoading) return <LoadingSpinner />;
  if (error || !movieTrailer)
    return <p className="text-gray-500">No trailer found</p>;

  return (
    <div className="w-full h-120 bg-black rounded-lg overflow-hidden flex items-center justify-center">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${movieTrailer.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded-lg"
      ></iframe>
    </div>
  );
}
