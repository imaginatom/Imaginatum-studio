import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="bg-neutral-900 text-white px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-neutral-900 font-bold text-lg">S</span>
          </div>
          <h1 className="text-2xl font-bold tracking-wider">SWIRLZY</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="#" className="hover:text-yellow-400 transition">
            Life & News
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Store
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Recipes
          </a>
        </nav>

        <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 relative">
          CART
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full text-white text-xs flex items-center justify-center font-bold">
            2
          </span>
        </button>
      </header>

      {/* Main Content */}
      <div className="px-6 md:px-12 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Hero and Top Picks */}
          <div className="md:col-span-2 space-y-6">
            {/* Hero Section with Background Image */}
<div className="rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-2/3 flex items-center justify-center">
  {/* Background Color - Bottom layer */}
  <div className="absolute inset-0 bg-amber-300 z-0"></div>
  
  {/* Text Content - Middle layer */}
  <div className="relative z-10 text-center text-white">
    <h1 className="text-9xl md:text-7xl font-black mb-4 text-pretty">SQUEEZE</h1>
    
  </div>

  {/* Background Image - Top layer */}
  <div className="absolute inset-0 z-20">
    <Image
      src="flying-donuts-no-bg.png"
      alt="Fresh baked goods"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* Price Badge */}
  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-teal-700 text-white rounded-full px-4 py-2 font-bold text-sm z-30">
    FROM $12
  </div>

  {/* Rating */}
  <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-center z-30">
    <div className="text-white font-bold text-lg">4.8</div>
    <div className="text-white text-xs">since 1985</div>
  </div>
</div>

            {/* Top 5 Picks Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-8 text-center">TOP-5 PICKS</h2>

              <div className="space-y-6">
                {/* Product Item 1 */}
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <div className="w-12 h-12 bg-sky-300 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    🥐
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-neutral-900 text-base">Honey Bun</h4>
                    <p className="text-neutral-600 text-sm">Fluffy bun with sweet honey glaze</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-bold text-neutral-900">$4.99 each</span>
                    <button className="w-8 h-8 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition">
                      +
                    </button>
                  </div>
                </div>

                {/* Product Item 2 */}
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    🍈
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-neutral-900 text-base">Melon Buns</h4>
                    <p className="text-neutral-600 text-sm">Light bun with smooth melon filling</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-bold text-neutral-900">$5.50 each</span>
                    <button className="w-8 h-8 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition">
                      +
                    </button>
                  </div>
                </div>

                {/* Product Item 3 */}
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <div className="w-12 h-12 bg-rose-300 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    🍰
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-neutral-900 text-base">Berry Tart</h4>
                    <p className="text-neutral-600 text-sm">Delicate pastry with fresh berries</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-bold text-neutral-900">$6.99 each</span>
                    <button className="w-8 h-8 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition">
                      +
                    </button>
                  </div>
                </div>

                {/* Product Item 4 */}
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <div className="w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    🥖
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-neutral-900 text-base">Sourdough Loaf</h4>
                    <p className="text-neutral-600 text-sm">Artisan bread with perfect crust</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-bold text-neutral-900">$7.50 each</span>
                    <button className="w-8 h-8 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition">
                      +
                    </button>
                  </div>
                </div>

                {/* Product Item 5 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    🧁
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-neutral-900 text-base">Chocolate Cup</h4>
                    <p className="text-neutral-600 text-sm">Rich chocolate cupcake with frosting</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="font-bold text-neutral-900">$5.99 each</span>
                    <button className="w-8 h-8 bg-teal-700 text-white rounded-full font-bold hover:bg-teal-800 transition">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Side Cards */}
          <div className="flex flex-col gap-6">
            {/* School Card with Background Image */}
            <div className="rounded-3xl p-8 relative overflow-hidden min-h-80 flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Baking school"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-cyan-500 bg-opacity-40"></div>
              
              <div className="relative z-10 text-center text-white">
                <h3 className="text-3xl md:text-4xl font-black mb-2">SCHOOL</h3>
                <p className="text-lg font-medium mb-6">Learn to bake deliciously</p>
                
                <button className="bg-neutral-900 text-yellow-400 font-black py-3 px-8 rounded-full hover:bg-neutral-800 transition mb-2 text-sm">
                  EXPLORE
                </button>
                <p className="text-sm font-semibold">JOIN NOW</p>
              </div>
            </div>

            {/* Everyday Card with Background Image */}
            <div className="rounded-3xl p-8 relative overflow-hidden min-h-80 flex items-center justify-center">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Daily delivery"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-orange-400 bg-opacity-40"></div>
              
              <div className="relative z-10 text-center text-white">
                <h3 className="text-3xl md:text-4xl font-black mb-2">EVERYDAY</h3>
                <p className="text-sm font-medium mb-6 max-w-xs mx-auto">
                  Freshly baked, delivered daily right to your door!
                </p>

                <div className="bg-teal-700 text-white rounded-full px-6 py-2 w-fit mx-auto font-bold text-lg">
                  $10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}