import { ArrowUp, CalendarCheck, CalendarDays, Circle, CircleAlert, Eye, TriangleAlert, UserRound } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../ui/button'
import { HalfBlackWhiteCircle } from '../common/icons'

const filters = [
    {
        name: "My tasks",
        value: "my_tasks",
        count: 20,
        icon: <UserRound className='w-4 h-4 text-[#6B7280]' />,
        group: 'quick_filters'
    },
    {
        name: "Overdue",
        value: "overdue",
        count: 5,
        icon: <TriangleAlert className='w-4 h-4 text-[#6B7280]' />,
        group: 'quick_filters'
    },
    {
        name: "Due Today",
        value: "due_today",
        count: 7,
        icon: <CalendarCheck className='w-4 h-4 text-[#6B7280]' />,
        group: 'quick_filters'
    },
    {
        name: "This Week",
        value: "this_week",
        count: 20,
        icon: <CalendarDays className='w-4 h-4 text-[#6B7280]' />,
        group: 'quick_filters'

    },
    {
        name: "In Progress",
        value: "in_progress",
        count: 10,
        icon: <HalfBlackWhiteCircle fill='#3B82F6' />,
        group: 'status'

    },
    {
        name: "To Do",
        value: "to_do",
        count: 12,
        icon: <Circle className='w-4 h-4 text-[#6B7280]' />,
        group: 'status'

    },
    {
        name: "Review",
        value: "review",
        count: 12,
        icon: <Eye className='w-4 h-4 text-[#6B7280]' />,
        group: 'status'

    },
    {
        name: "High",
        value: "high",
        count: 6,
        icon: <ArrowUp className='w-4 h-4 text-[#6B7280]' />,
        group: 'priority'

    },
    {
        name: "Critical",
        value: "critical",
        count: 8,
        icon: <CircleAlert fill='#6B7280' className='w-4 h-4 text-[#fff]' />,
        group: 'priority'

    },
]
function FilterDropdown() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    function handleFilterClick(filter: string) {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((f) => f !== filter))
        } else {
            setSelectedFilters([...selectedFilters, filter])
        }
    }
    console.log('selectedFilters', selectedFilters);

    return (
        <div className='w-[250px] h-auto rounded-[8px] bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] font-inter'>
            <div className='w-fll flex flex-col gap-2 py-4 px-2'>
                <p className='text-[#9CA3AF] font-inter font-bold text-[14px]'>QUICK FILTERS</p>
                {filters.filter((filter) => filter.group === 'quick_filters').map((filter, index) => {
                    return <div key={index}
                        onClick={() => handleFilterClick(filter.value)}
                        className={`w-fll flex items-center justify-between gap-2 px-2 h-[35px] rounded-[8px] cursor-pointer ${selectedFilters.includes(filter.value) ? 'bg-[#EFF6FF] text-[#3B82F6]' : 'text-[#6B7280]'}`}>
                        <div className='flex items-center gap-2'>
                            {filter.icon}
                            <p className=' font-inter font-medium text-[12px]'>{filter.name}</p>
                        </div>
                        <p className='text-[#6B7280] font-inter font-medium text-[11px] w-7 h-5 flex items-center justify-center rounded-full bg-[#e0e0e0]'>{filter.count}</p>
                    </div>
                })}
                <hr className='w-full h-px bg-[#e0e0e0]' />
                <p className='text-[#9CA3AF] font-inter font-bold text-[14px]'>STATUS</p>
                {filters.filter((filter) => filter.group === 'status').map((filter, index) => {
                    return <div key={index}
                        onClick={() => handleFilterClick(filter.value)}
                        className={` w-fll flex items-center justify-between gap-2 px-2 h-[35px] rounded-[8px] cursor-pointer ${selectedFilters.includes(filter.value) ? 'bg-[#EFF6FF] text-[#3B82F6]' : 'text-[#6B7280]'}`}>
                        <div className='flex items-center gap-2'>
                            {filter.icon}
                            <p className=' font-inter font-medium text-[12px]'>{filter.name}</p>
                        </div>
                        <p className='text-[#6B7280] font-inter font-medium text-[11px] w-7 h-5 flex items-center justify-center rounded-full bg-[#e0e0e0]'>{filter.count}</p>
                    </div>
                })}
                <hr className='w-full h-px bg-[#e0e0e0]' />
                <p className='text-[#9CA3AF] font-inter font-bold text-[14px]'>PRIORITY</p>
                {filters.filter((filter) => filter.group === 'priority').map((filter, index) => {
                    return <div key={index}
                        onClick={() => handleFilterClick(filter.value)}
                        className={` w-fll flex items-center justify-between gap-2 px-2 h-[35px] rounded-[8px] cursor-pointer ${selectedFilters.includes(filter.value) ? 'bg-[#EFF6FF] text-[#3B82F6]' : 'text-[#6B7280]'}`}>
                        <div className='flex items-center gap-2'>
                            {filter.icon}
                            <p className='font-inter font-medium text-[12px]'>{filter.name}</p>
                        </div>
                        <p className='text-[#6B7280] font-inter font-medium text-[11px] w-7 h-5 flex items-center justify-center rounded-full bg-[#e0e0e0]'>{filter.count}</p>
                    </div>
                })}
                <hr className='w-full h-px bg-[#e0e0e0]' />
                <div className='flex items-center justify-between gap-2'>
                    <Button className="w-1/2 h-[40px] flex items-center justify-center bg-[#e0e0e0] hover:bg-[#e0e0e0]/80 cursor-pointer rounded-[8px] text-[#6B7280]">Clear All</Button>
                    <Button className="w-1/2 h-[40px] flex items-center justify-center bg-primary hover:bg-primary/80 cursor-pointer rounded-[8px] text-white">Apply</Button>
                </div>
            </div>
        </div>
    )
}

export default FilterDropdown