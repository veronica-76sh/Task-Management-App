'use client';

interface OptionModelProps {
    options: string[],
    setOption: (value: string) => void;
}

function OptionModel({
    options,
    setOption
} : OptionModelProps) {

    const handleOption = (option: string) => {
        setOption(option.toLowerCase());
    }

    return (
        <div className="absolute top-10 bg-purple-200 py-1 px-3 text-sm rounded-xl z-50 w-36 shadow-sm" >
            <ul>
                {options.map((option, index) => (
                    <li onClick={() => handleOption(option)} key={index} className="text-lg text-purple-800 hover:opacity-80 px-3 py-2 ">
                        {option}
                    </li>
                    ))}
            </ul>
        </div>
    )
}

export default OptionModel