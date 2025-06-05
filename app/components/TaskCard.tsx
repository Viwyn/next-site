import React from 'react'
import { Tasks } from '../../types'

const TaskCard = ({ userId, id, title, completed}: Tasks) => {
    return (
        <div className='rounded-lg bg-rose-400 w-fit shadow-md p-4 mb-4 border-gray-300 hover:shadow-lg transition-shadow flex flex-col'>
            <h2 className='underline text-l font-semibold text-grey-800 mb-2'>{title}</h2>
            <p className='text-sm text-gray-600'>user: {userId}</p>
        </div>
    )
}

export default TaskCard 