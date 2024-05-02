import React from "react";

interface ButtonFilterProps {
  texto: string;
  ativo: boolean;
  onClick: (text: string) => void;
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({ texto, ativo, onClick }) => {
  return (
    <button 
      className={`w-32 h-10 text-white mb- md:mb-0 filter-buttons-container z-10 ${ativo ? 'bg-blue' : 'bg-gray-medium bg-opacity-50 hover:bg-blue'} border border-white rounded-2xl text-xl`}
      onClick={() => onClick(texto)}
    >
      {texto}
    </button>
  );
};

export default ButtonFilter;
