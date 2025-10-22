import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ToggleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ToggleSection = ({ title, children, defaultOpen = false }: ToggleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 text-lg">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToggleSection;
