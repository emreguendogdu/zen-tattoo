import Image from "next/image"
import Image1 from "@/components/images/gallery/1.webp"

export default function GalleryIntro() {
  return (
    <div className="relative bg-black px-2 -mt-[10dvh] z-50 pt-sectionY-m-half pb-sectionY min-h-[150dvh]">
      <div className="sticky top-0 flex flex-col justify-center items-center h-[100dvh]">
        <span className="h0 block text-white mb-8 md:mb-16">Gallery</span>
        <div className="flex items-center justify-center">
          <div className="relative w-[700px] h-[70dvh] rounded-md">
            <Image
              src={Image1}
              alt="Gallery"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
