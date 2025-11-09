import './work.scss';
import { useState, useEffect } from 'react';

// Import local images
import filmdbImg from '../../assets/images/filmdb.jpg';
import filmdbImg2 from '../../assets/images/filmdb2.png';
import filmdbImg3 from '../../assets/images/filmdb3.png';
import laravelFilamentImg from '../../assets/images/filament1.png';
import laravelFilamentImg2 from '../../assets/images/filament2.png';
import laravelFilamentImg3 from '../../assets/images/filament3.png';
import behaviorDetectionImg from '../../assets/images/Impostor.jpg';
import Streamlit1 from '../../assets/images/streamlit1.png';
import Streamlit2 from '../../assets/images/streamlit2.png';
import huntingWebsiteImg from '../../assets/images/huntingWebsiteImg.jpg';
import huntingWebsiteImg2 from '../../assets/images/huntingWebsiteImg2.jpg';
import huntingWebsiteImg3 from '../../assets/images/huntingWebsiteImg3.jpg';
import benwistudios from '../../assets/images/benwistudios.jpg';
import benwistudios2 from '../../assets/images/benwistudios2.jpg';
import bitm from '../../assets/images/bitm.jpg';
import bitm2 from '../../assets/images/bitm2.jpg';
import bitm3 from '../../assets/images/bitm3.jpg';

function Work() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState({});

    // Define the projects you want to display
    const selectedProjects = [
        {
            id: 1,
            name: 'laravel_filament',
            html_url: '#'
        },
        {
            id: 2,
            name: 'FilmDB2',
            html_url: '#'
        },
        {
            id: 3,
            name: 'Hunting_Website_Morocco',
            html_url: 'https://hunting-website-morocco.vercel.app/'
        },
        // {
        //     id: 3,
        //     name: 'Impostor',
        //     html_url: '#'
        // },
        // {
        //     id: 4,
        //     name: 'GESTION_DE_STOCK',
        //     html_url: '#'
        // },
        {
            id: 5,
            name: 'Behavior_Analyzer',
            html_url: '#'
        },
        // {
        //     id: 6,
        //     name: 'Hunting_Website_Morocco',
        //     html_url: 'https://hunting-website-morocco.vercel.app/'
        // }
        {
    id: 5,
    name: 'Benwi_Studios',
    html_url: 'https://benwistudios.com/'
},
{
    id: 6,
    name: 'Baby_In_The_Making',
    html_url: 'https://babyinthemaking.com/'
},

    ];

    // Map project names to arrays of local images (screenshots)
    const imageMap = {
        'Behavior_Analyzer': [Streamlit1, Streamlit2],
        'GESTION_DE_STOCK': ['https://via.placeholder.com/700x398?text=GESTION+DE+STOCK+Screenshot'],
        'laravel_filament': [laravelFilamentImg, laravelFilamentImg2, laravelFilamentImg3],
        'FilmDB2': [filmdbImg, filmdbImg2, filmdbImg3],
        'Impostor': [behaviorDetectionImg, behaviorDetectionImg, behaviorDetectionImg],
        'Hunting_Website_Morocco': [huntingWebsiteImg, huntingWebsiteImg2, huntingWebsiteImg3],
        'Benwi_Studios': [benwistudios, benwistudios2],
        'Baby_In_The_Making': [bitm, bitm2,bitm3],
    };

    // Map project names to custom descriptions
    const descriptionMap = {
        'laravel_filament': 'A full-featured stock management application built with Laravel, Laravel Filament, Inertia.js, Livewire, and React.js. It includes Stripe integration and offers a modern, dynamic interface for small business inventory management.',
        
        'FilmDB2': 'A responsive movie discovery website built with React.js, Supabase, and Bootstrap. Users can search, rate, and explore trending, upcoming, and popular movies and TV shows in real time.',
        
        'Impostor': 'A multiplayer web game developed with React.js and Firebase. Players join a lobby and try to identify the impostor based on mismatched football player names, with real-time chat and up to 6 players per room.',
        
        'GESTION_DE_STOCK': 'A stock management website supporting multiple warehouses and tracking employee amortization. Built with PHP and Bootstrap to provide a simple yet effective business inventory solution.',
        
        'Behavior_Analyzer': 'A data analysis web app built with Python, Flask, and MongoDB Atlas. Using Selenium and Geckodriver, the app scrapes GitHub posts and comments in real-time, then processes and analyzes them to detect sentiment (positive, negative, neutral), identify the most frequently used words, and highlight the most engaged users. Ideal for gaining insights into developer discussions and trends on GitHub.',
    
        'Hunting_Website_Morocco': 'A modern hunting information platform built with React.js and Vite, offering users a clean and interactive way to explore hunting seasons, permitted zones, regulations, and species across Morocco.',
    
        'Benwi_Studios': 'A custom Shopify e-commerce store with a clean, modern interface designed for smooth product browsing and a streamlined shopping experience.',

        'Baby_In_The_Making': 'A Shopify boutique focused on baby products, featuring soft visuals, simple navigation, and optimized product pages for a warm shopping experience.',
    };

    // Initialize current image index for each project
    useEffect(() => {
        const initialIndexes = {};
        selectedProjects.forEach(project => {
            initialIndexes[project.name] = 0;
        });
        setCurrentImageIndex(initialIndexes);
        setProjects(selectedProjects);
        setLoading(false);
    }, []);

    // Navigation functions
    const nextImage = (projectName) => {
        const images = imageMap[projectName] || [];
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectName]: (prev[projectName] + 1) % images.length
        }));
    };

    const prevImage = (projectName) => {
        const images = imageMap[projectName] || [];
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectName]: prev[projectName] === 0 ? images.length - 1 : prev[projectName] - 1
        }));
    };

    const goToImage = (projectName, index) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectName]: index
        }));
    };

    return (
        <div className="work">
            <div className="work-header">
                <span>
                    <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99999 18C6.46955 18 5.96085 17.7893 5.58577 17.4142C5.2107 17.0391 4.99999 16.5304 4.99999 16V13.61C5.00042 12.9513 4.83816 12.3027 4.52764 11.7218C4.21712 11.1408 3.76793 10.6456 3.21999 10.28L2.79999 10L3.21999 9.72C3.76793 9.35442 4.21712 8.85917 4.52764 8.27825C4.83816 7.69733 5.00042 7.04871 4.99999 6.39V4C4.99999 3.46957 5.2107 2.96086 5.58577 2.58579C5.96085 2.21071 6.46955 2 6.99999 2C7.2652 2 7.51956 1.89464 7.70709 1.70711C7.89463 1.51957 7.99999 1.26522 7.99999 1C7.99999 0.734784 7.89463 0.48043 7.70709 0.292893C7.51956 0.105357 7.2652 0 6.99999 0C5.93912 0 4.92171 0.421427 4.17156 1.17157C3.42142 1.92172 2.99999 2.93913 2.99999 4V6.39C3.00103 6.7202 2.92029 7.04552 2.765 7.33692C2.6097 7.62832 2.38467 7.87674 2.10999 8.06L0.449988 9.17C0.313865 9.26148 0.202329 9.38503 0.125209 9.52977C0.0480885 9.67451 0.00775146 9.836 0.00775146 10C0.00775146 10.164 0.0480885 10.3255 0.125209 10.4702C0.202329 10.615 0.313865 10.7385 0.449988 10.83L2.10999 11.94C2.38467 12.1233 2.6097 12.3717 2.765 12.6631C2.92029 12.9545 3.00103 13.2798 2.99999 13.61V16C2.99999 17.0609 3.42142 18.0783 4.17156 18.8284C4.92171 19.5786 5.93912 20 6.99999 20C7.2652 20 7.51956 19.8946 7.70709 19.7071C7.89463 19.5196 7.99999 19.2652 7.99999 19C7.99999 18.7348 7.89463 18.4804 7.70709 18.2929C7.51956 18.1054 7.2652 18 6.99999 18Z" fill="#14E956"/>
                    </svg>
                    <h2>All Works</h2>
                    <svg width="16" height="40" viewBox="0 0 8 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55 9.17L5.89 8.06C5.61532 7.87674 5.39029 7.62832 5.23499 7.33692C5.07969 7.04552 4.99896 6.7202 5 6.39V4C5 2.93913 4.57857 1.92172 3.82843 1.17157C3.07828 0.421427 2.06087 0 1 0C0.734784 0 0.480429 0.105357 0.292892 0.292893C0.105356 0.48043 0 0.734784 0 1C0 1.26522 0.105356 1.51957 0.292892 1.70711C0.480429 1.89464 0.734784 2 1 2C1.53043 2 2.03914 2.21071 2.41421 2.58579C2.78929 2.96086 3 3.46957 3 4V6.39C2.99957 7.04871 3.16183 7.69733 3.47235 8.27825C3.78287 8.85917 4.23205 9.35442 4.78 9.72L5.2 10L4.78 10.28C4.23205 10.6456 3.78287 11.1408 3.47235 11.7218C3.16183 12.3027 2.99957 12.9513 3 13.61V16C3 16.5304 2.78929 17.0391 2.41421 17.4142C2.03914 17.7893 1.53043 18 1 18C0.734784 18 0.480429 18.1054 0.292892 18.2929C0.105356 18.4804 0 18.7348 0 19C0 19.2652 0.105356 19.5196 0.292892 19.7071C0.480429 19.8946 0.734784 20 1 20C2.06087 20 3.07828 19.5786 3.82843 18.8284C4.57857 18.0783 5 17.0609 5 16V13.61C4.99896 13.2798 5.07969 12.9545 5.23499 12.6631C5.39029 12.3717 5.61532 12.1233 5.89 11.94L7.55 10.83C7.68612 10.7385 7.79766 10.615 7.87478 10.4702C7.9519 10.3255 7.99224 10.164 7.99224 10C7.99224 9.836 7.9519 9.67451 7.87478 9.52977C7.79766 9.38503 7.68612 9.26148 7.55 9.17Z" fill="#14E956"/>
                    </svg>
                </span>
            </div>
            <div className="projects">
                {loading && <p>Loading projects...</p>}
                {!loading && projects.length === 0 && <p>No projects found.</p>}
                {!loading && projects.map((project, index) => {
                    const images = imageMap[project.name] || ['https://via.placeholder.com/300x200?text=Project+Image'];
                    const currentIndex = currentImageIndex[project.name] || 0;
                    
                    return (
                        <div key={project.id} className={`single ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="single-img">
                                <div className="image-slider">
                                    {/* Navigation Arrows */}
                                    {images.length > 1 && (
                                        <>
                                            <button 
                                                className="slider-nav prev" 
                                                onClick={() => prevImage(project.name)}
                                                aria-label="Previous image"
                                            >
                                                &#8249;
                                            </button>
                                            <button 
                                                className="slider-nav next" 
                                                onClick={() => nextImage(project.name)}
                                                aria-label="Next image"
                                            >
                                                &#8250;
                                            </button>
                                        </>
                                    )}
                                    
                                    {/* Current Image */}
                                    <img 
                                        src={images[currentIndex]} 
                                        alt={`${project.name} Screenshot ${currentIndex + 1}`} 
                                        className="screenshot slider-image"
                                    />
                                    {images.length > 1 && (
                                        <div className="slider-dots">
                                            {images.map((_, imgIndex) => (
                                                <button
                                                    key={imgIndex}
                                                    className={`dot ${imgIndex === currentIndex ? 'active' : ''}`}
                                                    onClick={() => goToImage(project.name, imgIndex)}
                                                    aria-label={`Go to image ${imgIndex + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="single-detail">
                                <h4>{project.name}</h4>
                                <p>
                                    <span>Description:</span> {descriptionMap[project.name] || 'No description available.'}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Work;