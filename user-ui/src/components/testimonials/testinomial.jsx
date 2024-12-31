import { AnimatedTestimonials } from "../magicui/testimonials";

export function BlockchainTestimonials() {
    const testimonials = [
        {
            quote:
                "The blockchain-based IP protection solution has given us unparalleled peace of mind. Knowing our intellectual property is secure is priceless.",
            name: "Alexandra Green",
            designation: "Founder at CreativeEdge Studios",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This platform ensures our patents and trademarks are safely stored and verifiable on the blockchain. A game-changer for our business.",
            name: "John Carter",
            designation: "CEO at SecureIP Inc.",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The transparency and immutability of this blockchain platform have revolutionized how we manage copyrights for our digital assets.",
            name: "Sophia Lin",
            designation: "Creative Director at ArtSync",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Our intellectual property has never been more secure. This service is essential for any modern business dealing with innovative solutions.",
            name: "Derek Miller",
            designation: "CTO at BlockchainSec",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "This platform has enabled us to protect our IP with confidence. The blockchain integration is seamless and highly effective.",
            name: "Emily Brown",
            designation: "Innovation Lead at NextGen Labs",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}