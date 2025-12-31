import { X } from 'lucide-react'
import React from 'react'

function SelectedFilterButton({ filter, onClick }: { filter: { label: string, group: string }, onClick: () => void }) {
    const capitalizedGroup = filter.group.charAt(0).toUpperCase() + filter.group.slice(1);

    return (
        <div className='w-fit px-3 py-1 bg-primary/5 border border-primary/10 rounded-full flex items-center gap-2'>
            <div className='text-primary/80 flex items-center gap-2'>
                <span className='text-[13px] font-medium'>{capitalizedGroup}: {filter.label}</span>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                    }}
                    className='cursor-pointer hover:text-red-500 transition-colors'
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    )
}

export default SelectedFilterButton