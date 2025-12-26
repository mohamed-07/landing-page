import React from 'react'

const images = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1681400054984-c20bf5879c3b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY4fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww"
    
];

export default function HeroSection() {
  return (
    <section id='home' className='app-container pt-24 pb-12 overflow-hidden sm:overflow-visible'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* left content */}
        <div className='space-y-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='gradient-text'>Artificial Intelligence</span>
                <br />
                For Smarter Future
            </h1>
            <p className='text-lg text-gray-600 max-w-lg'>
                Discover how AI is transforming industries and improving lives
                worldwide. Our cutting-edge solution harness the power of machine
                learning to solve complex problems.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <a className='btn-primary' href="#">Explore AI Solutions</a>
                <a className='btn-outline' href="#">Learn more</a>
            </div>

            <div className='flex items-center pt-4 space-x-4'>
                <div className='flex -space-x-2'>
                    {images.map((img, i)=> (
                        <img 
                        key={i}
                        className='avatar'
                        src={img}
                        alt={`User ${i+1}`}/>
                    ))}
                </div>
                <p className='text-sm font-medium text-gray-600'>
                    Trusted by{" "}
                    <span className='text-primary font-bold'>10,000+</span>
                    people worldwide
                </p>
            </div>
        </div>
        {/* right image */}
        <div className='relative w-full h-80 md:h-150'>
            <img 
            className='w-full h-full object-cover rounded-2xl'
            src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
            alt="hero section" />
            <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
            <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
    </div>
    </section>
  )
}
