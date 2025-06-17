import React, { useContext, useEffect, useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { AuthContext } from '../context/AuthContext'
// import { myBooksPromise } from '../api/myBooksPromise'
import useMyBooksApi from '../api/useMyBooksApi'


const COLORS = ['#6366F1', '#EC4899', '#10B981', '#F59E0B', '#EF4444']

const UserDashboard = () => {
  const {user} = useContext(AuthContext);
  const {myBookPromiseSecure} = useMyBooksApi()
  const [myBooksData, setMyBooksData] = useState([]);

  useEffect(()=>{
    myBookPromiseSecure(user.email)
    .then(res=>{
      setMyBooksData(res.data)
    })
  },[user.email, myBookPromiseSecure])

  const categoryCounts = myBooksData.reduce((acc, book) => {
    acc[book.book_category] = (acc[book.book_category] || 0) + 1
    return acc
  }, {})

  const chartData = Object.entries(categoryCounts).map(([category, count]) => ({
    name: category,
    value: count
  }))

  return (
    <div className='min-h-screen bg-gray-50 p-6 pt-10 pb-15'>
      <div className='max-w-5xl mx-auto bg-white shadow-md min-h-screen  rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>
          Bookshelf Summary
        </h2>

        <div className='flex items-center gap-4 mb-6'>
          <img
            src={user.photoURL}
            alt='User profile'
            className='w-16 h-16 rounded-full border-2 border-indigo-500'
          />
          <div>
            <h3 className='text-lg font-semibold text-gray-700'>{user.displayName}</h3>
            <p className='text-sm text-gray-500'>{user.email}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h4 className='text-lg font-semibold mb-2 text-gray-700'>
              📖 Summary
            </h4>
            <ul className='list-disc list-inside text-gray-600 space-y-1'>
              <li>Total Books: {myBooksData.length}</li>
              {Object.entries(categoryCounts).map(([category, count]) => (
                <li key={category}>
                  {category}: {count}
                </li>
              ))}
            </ul>
          </div>

          
          <div className='h-64'>
            <h4 className='text-lg font-semibold mb-2 text-gray-700'>
              📊 Books by Category
            </h4>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  outerRadius={80}
                  fill='#8884d8'
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
