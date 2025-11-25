'use client';

import { useState, useEffect } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

interface SuccessStory {
  id: string;
  title: string;
  memberName: string;
  category: string;
  videoFile: string;
  thumbnail?: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function LatestProjects() {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<SuccessStory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await fetch('/api/success-stories?status=published');
        if (response.ok) {
          const data = await response.json();
          setSuccessStories(data);
        }
      } catch (error) {
        console.error('Error fetching success stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuccessStories();
  }, []);

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? match[2] : null;
  };

  const openVideoModal = (story: SuccessStory) => {
    setSelectedVideo(story);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  if (loading) {
    return (
      <section id="success-stories" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading success stories...</p>
          </div>
        </div>
      </section>
    );
  }

  if (successStories.length === 0) {
    return (
      <section id="success-stories" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.2}>
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">#Tatak SJMPC</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Member Success Stories
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
                Real stories from SJMPC members who achieved their dreams through our cooperative services and support.
              </p>
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300">No success stories available yet. Check back soon!</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="success-stories" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0.2}>
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">#Tatak SJMPC</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Member Success Stories
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Real stories from SJMPC members who achieved their dreams through our cooperative services and support.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer delay={0.4} staggerChildren={0.15}>
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <StaggerItem key={story.id}>
                  <FadeIn direction="up" delay={index * 0.1}>
                    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      {/* Video Thumbnail */}
                      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 cursor-pointer" onClick={() => openVideoModal(story)}>
                        {story.thumbnail ? (
                          <img
                            src={story.thumbnail}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                            <div className="text-center">
                              <svg className="w-16 h-16 text-blue-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Watch Story</p>
                            </div>
                          </div>
                        )}

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            {story.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {story.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-3">
                          {story.memberName}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {story.description}
                        </p>

                        {/* Watch Button */}
                        <button
                          onClick={() => openVideoModal(story)}
                          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Watch Story
                        </button>
                      </div>
                    </div>
                  </FadeIn>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedVideo.title}
                </h3>
                <p className="text-blue-600 font-medium">
                  {selectedVideo.memberName}
                </p>
              </div>
              <button
                onClick={closeVideoModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                {selectedVideo.videoFile ? (
                  selectedVideo.videoFile.includes('youtube.com') || selectedVideo.videoFile.includes('youtu.be') ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.videoFile)}`}
                      title={selectedVideo.title}
                      className="w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      controls
                      className="w-full h-full rounded-lg"
                      src={selectedVideo.videoFile}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <div className="text-center">
                    <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Video not available
                    </p>
                  </div>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
