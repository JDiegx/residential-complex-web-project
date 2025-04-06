export const calendar = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    [
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00"
    ]
];

export const zones = [
    {
        id: 1,
        name: "Zen Gardens & Retreats",
        description: "Serene gardens with meditation paths, waterfalls, ambient lighting, and private pavilions for peaceful moments and reflection.",
        image: "serene_zen_gardens.png",
        capacity: 20,
        reserve: [
            { day: "Monday", time: "10:00 - 11:00" },
            { day: "Wednesday", time: "14:00 - 15:00" }
        ]
    },
    {
        id: 2,
        name: "Elite Sports Pavilion",
        description: "High-end sports complex with tennis courts, golf simulator, a modern gym, and a concierge to support your fitness and leisure needs.",
        image: "elite_sports_pavilion.png",
        capacity: 30,
        reserve: [
            { day: "Tuesday", time: "15:00 - 16:00" },
            { day: "Thursday", time: "16:00 - 17:00" }
        ]
    },
    {
        id: 3,
        name: "Ultra-Lux Wellness Spa",
        description: "A private retreat offering thermal circuits, premium spa treatments, private saunas, and peaceful spaces for deep relaxation.",
        image: "ultra_lux_spa.png",
        capacity: 15,
        reserve: [
            { day: "Friday", time: "11:00 - 12:00" },
            { day: "Wednesday", time: "13:00 - 14:00" }
        ]
    },
    {
        id: 4,
        name: "Michelin Dining Lounge",
        description: "Gourmet restaurant featuring dishes by award-winning chefs, private sommelier service, and panoramic views for a refined dining experience.",
        image: "michelin_dining.png",
        capacity: 25,
        reserve: [
            { day: "Thursday", time: "18:00 - 19:00" },
            { day: "Tuesday", time: "12:00 - 13:00" }
        ]
    },
    {
        id: 5,
        name: "Skyline Infinity Pools",
        description: "Rooftop pools with panoramic views, private cabanas, and exclusive cocktail service in a sleek and luxurious atmosphere.",
        image: "skyline_infinity_pools.png",
        capacity: 20,
        reserve: [
            { day: "Monday", time: "17:00 - 18:00" },
            { day: "Friday", time: "14:00 - 15:00" }
        ]
    },
    {
        id: 6,
        name: "Elite Kids Learning Club",
        description: "An exclusive children’s zone with interactive games, private tutors, and state-of-the-art educational tools in a safe and creative space.",
        image: "elite_kids_club.png",
        capacity: 20,
        reserve: [
            { day: "Wednesday", time: "10:00 - 11:00" },
            { day: "Thursday", time: "12:00 - 13:00" }
        ]
    },
    {
        id: 7,
        name: "Prestige Executive Lounge",
        description: "Private lounge with meeting rooms, a curated library, and exclusive concierge services.",
        image: "prestige_executive_clubhouse.png",
        capacity: 20,
        reserve: [
            { day: "Tuesday", time: "13:00 - 14:00" },
            { day: "Friday", time: "16:00 - 17:00" }
        ]
    },
    {
        id: 8,
        name: "VIP Signature Event Hall",
        description: "A luxurious event hall with modern tech, custom catering, and a sophisticated ambiance for private celebrations and elite gatherings.",
        image: "bespoke_vip_event_hall.png",
        capacity: 50,
        reserve: [
            { day: "Monday", time: "12:00 - 13:00" },
            { day: "Thursday", time: "11:00 - 12:00" }
        ]
    },
    {
        id: 9,
        name: "VIP Underground Parking",
        description: "Secure underground parking with biometric access, 24/7 valet service, and premium detailing for your vehicle’s ultimate care.",
        image: "vip_parking.png",
        capacity: 60,
        reserve: [
            { day: "Wednesday", time: "17:00 - 18:00" },
            { day: "Friday", time: "10:00 - 11:00" }
        ]
    }
];
