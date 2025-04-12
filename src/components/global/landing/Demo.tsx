'use client'

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { PlayCircle, X } from "lucide-react";
import "swiper/swiper-bundle.css";

interface Video {
  url: string;
  title: string;
  description: string;
}

interface DemoProps {
  videos: Video[];
}

function Demo({ videos = [] }: DemoProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const extractVideoId = (url: string): string | null => {
    try {
      const regex =
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
      const match = url.match(regex);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  const openPopup = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-white" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See AIWebBuilder in Action
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how easy it is to create stunning websites with our AI-powered
            platform.
          </p>
        </div>

        {videos.length === 0 ? (
          <div className="text-center text-gray-600">
            No videos available to display.
          </div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
          >
            {videos.map((video, index) => {
              const videoId = extractVideoId(video.url);
              if (!videoId) {
                console.warn(`Invalid YouTube URL: ${video.url}`);
                return null;
              }

              return (
                <SwiperSlide key={`${videoId}-${index}`}>
                  <div
                    className="group relative cursor-pointer"
                    onClick={() => openPopup(videoId)}
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <PlayCircle
                          className="text-white w-12 h-12 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {video.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {video.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      {/* Popup for Video Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-3xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closePopup}
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Demo;