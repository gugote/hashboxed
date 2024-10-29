'use client'
import { useState } from 'react';
import { ProjectsData, ProjectsDataTypes } from '../../../data/ProjectsData';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardsProps {
  layoutClass?: string
}

const caseStudyLink = (title: string) => {
  const caseURL = '/works/case-studies/' + title;
  return caseURL;
}

export default function ProjectCards({ layoutClass }: ProjectCardsProps) {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{url: string, bigUrl: string, description?: string} | null>(null);
  const [currentProjectImages, setCurrentProjectImages] = useState<{url: string, bigUrl: string, description?: string}[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const openModal = (image: {url: string; bigUrl: string; description?: string}, images: {url: string; bigUrl: string; description?: string}[], index: number) => {
    if(image.bigUrl !== ''){
      setCurrentImage(image);
      setCurrentProjectImages(images);
      setCurrentIndex(index);
      setModalOpen(true);
    }
  }

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % currentProjectImages.length;
    setCurrentIndex(newIndex);
    setCurrentImage(currentProjectImages[newIndex]);
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    setCurrentIndex(newIndex);
    setCurrentImage(currentProjectImages[newIndex]);
  }

  return (
    <div className={layoutClass}>
      {ProjectsData.map((project: ProjectsDataTypes) => (
        project.active && (
          <div key={project.title} className="project-card flex flex-row justify-between bg-white p-7 rounded-xl shadow-2xl mb-20 gap-8">
            <div className="w-1/3 sticky top-5 self-start mb-8">
              <h2 className="text-4xl font-extrabold tracking-tighter mb-1">
                {project.title}
              </h2>
              <h3 className="text-xl font-semibold tracking-tighter mb-2">{project.task}</h3>
              {project.href && (
              <Link href={project.href} className="text-sm my-3 rounded-full inline-block py-2 px-4 bg-sky-50 hover:shadow-sm" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-2 top-[-2px] relative inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                {project.href}
              </Link>
              )}
            <p className="mb-2" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              <div className="w-full my-6">
                {project.tech?.map((tech, index) => (
                  <span key={index} className="bg-zinc-100 text-zinc-400 py-2 px-4 inline-block mr-5 mb-5 w-auto text-xs rounded-full">{tech}</span>
                ))}
              </div>
              { project.hasCS && project.CSLink && (
                <Link 
                  href={{pathname: caseStudyLink(project.CSLink)}}
                  className="bg-black text-white py-2 px-4 rounded-lg hover:shadow-lg">
                  View Case Study
                </Link>
              )}
            </div>
            <div className="images-container w-2/3">
              {project.images && 
                project.images.map((image, index) => (
                  <div key={index} className="project-image-item border border-zinc-200 rounded mb-5 relative group">
                    {image.bigUrl && (
                      <span className="icon-resize absolute right-2 top-2 p-1 bg-black bg-opacity-30 rounded text-white group-hover:bg-opacity-45 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 group-hover:size-6 transition-all duration-300">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                        </svg>
                      </span>
                    )}
                    <Image 
                      alt={project.title}
                      src={`/works/${image.url}`}
                      layout='responsive'
                      width={1}
                      height={1}
                      className={`rounded ${!image.bigUrl ? '' : 'cursor-pointer'}`}
                      onClick={()=> openModal(image, project.images!, index)}
                    />
                    {image.description && 
                      <p className="p-2 text-center text-xs">{image.description}</p>
                    }
                  </div>
                ))}
            </div>
          </div>
        )
      ))}

      {modalOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-full h-dvh bg-transparent absolute" onClick={closeModal}></div>
          <button onClick={closeModal} className="absolute top-5 right-5 text-white bg-black p-2 shadow-2xl rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex items-center justify-center w-[80%] h-[auto] border-3 border-red-500 bg-white z-200 relative">
            <Image 
              alt={currentImage.description || "Image"}
              src={`/works/${currentImage.bigUrl}`}
              loading='lazy'
              layout='responsive'
              width={1462}
              height={802}
              quality={100}
              className="max-w-full h-auto"
            />
          </div>
          {currentImage.description && (
            <div className="p-2 text-center text-white bg-black bg-opacity-50 absolute bottom-0 w-full">
              {currentImage.description}
            </div>
          )}
          {currentProjectImages.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-5 top-[45%] text-white bg-black p-2 shadow-2xl rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                </svg>
              </button>
              <button onClick={nextImage} className="absolute right-5 top-[45%] text-white bg-black p-2 shadow-2xl rounded-full cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
