import { useEffect } from "react";
interface ModalProps {
    show: boolean;
    onClose: () => void;
    content: string;
  }



  const Modal: React.FC<ModalProps> = ({ show, onClose, content }) => {
    useEffect(() => {
        if (show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        return () => {
          document.body.style.overflow = '';
        };
      }, [show]);
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
          <button className="mb-4 font-bold text-2xl flex justify-end w-full" onClick={onClose}>
            X
          </button>
          <div className=" text-balance">{content}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;