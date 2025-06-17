import StatCounter from './StatCounter'

const StatsSection = () => {
  return (
    <section className='py-16 bg-gradient-to-br from-gray-100 to-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-xl md:text-2xl font-bold text-center mb-12 font-hero'>
           Our Impact in Numbers
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-secondary'>
          <StatCounter title='Books Listed' targetNumber={1200} icon='📚' />
          <StatCounter title='Reviews Shared' targetNumber={480} icon='📝' />
          <StatCounter
            title='Registered Readers'
            targetNumber={350}
            icon='👤'
          />
          <StatCounter title='Pages Read' targetNumber={87500} icon='📖' />
        </div>
      </div>
    </section>
  )
}

export default StatsSection
