"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    type: 'youtube' | 'drive' | 'url';
    idOrUrl: string;
  } | null;
}

export function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && video && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 md:p-12"
          onClick={onClose}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-brand-red transition-colors z-[110]"
            onClick={onClose}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full max-w-7xl relative bg-black shadow-2xl overflow-hidden border border-white/5 ${video.type === 'url' && video.idOrUrl.includes('instagram.com') ? 'aspect-[9/16] max-h-[85vh] max-w-md mx-auto' : 'aspect-video'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {video.type === 'youtube' && (
              <iframe 
                src={`https://www.youtube.com/embed/${video.idOrUrl}?autoplay=1&rel=0`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              ></iframe>
            )}
            {video.type === 'drive' && (
              <iframe 
                src={`https://drive.google.com/file/d/${video.idOrUrl}/preview`} 
                allow="autoplay" 
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              ></iframe>
            )}
            {video.type === 'url' && (
              <iframe 
                src={video.idOrUrl} 
                allow="autoplay; encrypted-media" 
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              ></iframe>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
