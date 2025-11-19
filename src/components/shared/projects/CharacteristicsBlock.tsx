import React from "react";

type CharacteristicsItem = {
    title: string;
    value: string[] | string;
};

type CharacteristicsProps = {
    data: CharacteristicsItem[];
};

const CharacteristicsBlock: React.FC<CharacteristicsProps> = ({ data }) => {
    return (
        <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[200px_1fr] py-4 border-b border-gray-200"
                    >
                        {/* LEFT: Title */}
                        <div className="font-semibold text-gray-800">{item.title}</div>

                        {/* RIGHT: Value */}
                        <div className="text-gray-700 leading-relaxed">
                            {Array.isArray(item.value) ? (
                                <ul className="list-disc pl-5">
                                    {item.value.map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            ) : (
                                <div>{item.value}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacteristicsBlock;
