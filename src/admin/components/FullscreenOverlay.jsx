import { createPortal } from 'react-dom';

const FullscreenOverlay = () => {
  return createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-[90] pointer-events-auto overflow-hidden"></div>,
    document.body
  );
};

export default FullscreenOverlay;