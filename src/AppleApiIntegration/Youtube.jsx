import React, { useState, useEffect } from "react";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_KEY = "AIzaSyAGGwEWIAHE-8m6kyPb9iJ9L_-gRflgtSQ";
        const channelId = "UCE_M8A5yxnLfW0KghEeajjw";
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-xl">
        Loading Apple videos...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-xl">
        Error: {error}
      </div>
    );

  return (
    <section className="bg-gray-100 py-10 px-5">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Latest from Apple
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {video.snippet.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
