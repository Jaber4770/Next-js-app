import React from 'react';

const ServiceDetailsPage = ({ params }) => {
    const id = params?.id;
    const data = [
        {
            "id": "prod-001",
            "name": "MSI Vector A18 HX (Ryzen 9 + RTX 5080)",
            "price": "$2,699.00",
            "url": "https://xoticpc.com/products/msi-vector-a18-hx-a9whg-074us?variant=44960868040875&utm_source=chatgpt.com",
            "image": "https://storage-asset.msi.com/global/picture/image/feature/nb/2025_AMD-KRK/vector-a18-hx-a9w/images/kv-pd.webp",  // Official MSI product page image 
            "description": "High-performance gaming laptop with Ryzen 9 and RTX 5080 GPU.",
            "rating": null,
            "reviews": null
        },
        {
            "id": "prod-002",
            "name": "MSI Titan 18 HX Dragon Edition (RTX 50-series)",
            "price": "$6,199.00",
            "url": "https://xoticpc.com/products/msi-titan-18-hx-dragon-edition-norse-myth-a2xwjg-440us?variant=44979698761899&utm_source=chatgpt.com",
            "image": "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/laptop-13-render-tablet-mobile-fy25?scl=1",  // Pending real image
            "description": "Ultimate powerhouse gaming laptop with RTX 50-series GPU.",
            "rating": null,
            "reviews": null
        },
        {
            "id": "prod-003",
            "name": "ASUS ROG Strix SCAR 18 (RTX 50-series)",
            "price": "$3,399.99",
            "url": "https://xoticpc.com/products/asus-rog-strix-scar-18-g835lw-xs97?variant=44973095747755&utm_source=chatgpt.com",
            "image": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Pending real image
            "description": "Flagship gaming laptop with premium build and RTX 50-series GPU.",
            "rating": null,
            "reviews": null
        },
        {
            "id": "prod-004",
            "name": "MSI Cyborg 15 (RTX 4050)",
            "price": "€1,049.00",
            "url": "https://www.unieuro.it/online/Notebook/CYBORG-15/product/150224485",
            "image": "https://plus.unsplash.com/premium_photo-1726876889330-b0ec9fe1ebc7?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Mid-range gaming laptop with RTX 4050 GPU and futuristic design.",
            "rating": 5.0,
            "reviews": 3
        },
        {
            "id": "prod-005",
            "name": "Acer Nitro V 15 (RTX 4050)",
            "price": "€849.90",
            "url": "https://www.unieuro.it/online/Notebook/Nitro-V-15/product/150223687",
            "image": "https://images.unsplash.com/photo-1637329589604-4485001b3605?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Affordable gaming laptop with RTX 4050 for solid 1080p gaming.",
            "rating": 3.8,
            "reviews": 4
        },
        {
            "id": "prod-006",
            "name": "Vivo X Fold 5",
            "price": "$1,500.00",
            "url": "https://techadaygiveaway.com/products/vivo-x-fold-3-pro?variant=48299608375529&utm_source=chatgpt.com",
            "image": "https://images.unsplash.com/photo-1672241860863-fab879bd4a07?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Innovative foldable smartphone with large screen and premium design.",
            "rating": null,
            "reviews": null
        },
        {
            "id": "prod-007",
            "name": "Samsung Galaxy A16",
            "price": "€129.99",
            "url": "https://www.unieuro.it/online/Smartphone/GALAXY-A16/product/150222995",
            "image": "https://images.unsplash.com/photo-1589102361623-e1b443030843?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Affordable Samsung smartphone with great battery life.",
            "rating": 4.8,
            "reviews": 16000
        },
        {
            "id": "prod-008",
            "name": "Xiaomi Redmi 14C",
            "price": "€129.99",
            "url": "https://www.unieuro.it/online/Smartphone/Redmi-14C/product/150224175",
            "image": "https://images.unsplash.com/photo-1585648062858-04d334c9354f?q=80&w=1038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "description": "Budget Xiaomi phone with reliable performance and modern design.",
            "rating": 4.8,
            "reviews": 27000
        }
    ]
    const matched = data.find(d => d.id == id);
    if (matched) {
        return (
            <div>
                <h1>service details ServiceDetailsPage.</h1>
                <p>ID: {id}</p>
                {
                    <div>
                        <h1 className='font-bold'>{matched.name}</h1>
                        <h2 className='font-bold'>Price: {matched.price}</h2>
                        <img className='w-1/2' src={matched.image} alt="" />
                    </div>
                }
            </div>
        );
    } else {
        return <>
            <p>sorry bhai.</p>
        </>
        
    }

};

export default ServiceDetailsPage;