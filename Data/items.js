const videoGames = [
    {
        id: '001',
        image: 'Media/Images/game1.jpg',
        company: 'Ubisoft',
        item_name: "Assassin's Creed Valhalla",
        original_price: 3999,
        current_price: 2999,
        discount_percentage: 25,
        genre: 'Action',
        description: 'Embark on a Viking saga as you raid, conquer, and forge alliances in a vast open-world setting.',
        featured: true,
    },
    {
        id: '002',
        image: 'Media/Images/game2.jpg',
        company: 'Larian Studios',
        item_name: "Baldur's Gate 3",
        original_price: 4999,
        current_price: 4499,
        discount_percentage: 10,
        genre: 'RPG',
        description: 'Dive into a rich, branching narrative in this critically acclaimed RPG with tactical turn-based combat.',
        featured: false,
    },
    {
        id: '003',
        image: 'Media/Images/game3.jpg',
        company: 'Game Science',
        item_name: 'Black Myth: Wukong',
        original_price: 5999,
        current_price: 4999,
        discount_percentage: 17,
        genre: 'Action',
        description: 'Experience a dark, fantastical journey inspired by Chinese mythology, featuring thrilling combat.',
        featured: true,
    },
    {
        id: '004',
        image: 'Media/Images/game4.jpeg',
        company: 'Firaxis Games',
        item_name: 'Civilization 6',
        original_price: 2999,
        current_price: 2499,
        discount_percentage: 17,
        genre: 'Strategy',
        description: 'Lead your civilization from the Stone Age to the Space Age in this iconic turn-based strategy game.',
        featured: false,
    },
    {
        id: '005',
        image: 'Media/Images/game5.jpg',
        company: 'Valve',
        item_name: 'Counter-Strike: Global Offensive',
        original_price: 1999,
        current_price: 999,
        discount_percentage: 50,
        genre: 'Action',
        description: 'Engage in intense tactical shooting in this global esports phenomenon.',
        featured: false,
    },
    {
        id: '006',
        image: 'Media/Images/game6.jpg',
        company: 'Paradox Interactive',
        item_name: 'Crusader Kings III',
        original_price: 3499,
        current_price: 2999,
        discount_percentage: 14,
        genre: 'Strategy',
        description: 'Rule and expand your dynasty in this grand strategy game of politics, war, and intrigue.',
        featured: false,
    },
    {
        id: '007',
        image: 'Media/Images/game7.jpg',
        company: 'CD Projekt Red',
        item_name: 'Cyberpunk 2077',
        original_price: 4499,
        current_price: 3499,
        discount_percentage: 22,
        genre: 'Action',
        description: 'Explore a futuristic open world filled with cybernetic enhancements and moral dilemmas.',
        featured: true,
    },
    {
        id: '008',
        image: 'Media/Images/game8.jpg',
        company: 'Blizzard Entertainment',
        item_name: 'Diablo 4',
        original_price: 5999,
        current_price: 4999,
        discount_percentage: 17,
        genre: 'RPG',
        description: 'Venture into a dark and gritty world filled with demons, dungeons, and epic loot.',
        featured: false,
    },
    {
        id: '009',
        image: 'Media/Images/game9.jpg',
        company: 'Codemasters',
        item_name: 'Dirt 4',
        original_price: 1999,
        current_price: 1499,
        discount_percentage: 25,
        genre: 'Sports & Racing',
        description: 'Race through challenging off-road tracks with realistic physics and intense gameplay.',
        featured: false,
    },
    {
        id: '010',
        image: 'Media/Images/game10.jpg',
        company: 'id Software',
        item_name: 'Doom Eternal',
        original_price: 3999,
        current_price: 2999,
        discount_percentage: 25,
        genre: 'Action',
        description: 'Rip and tear through waves of demons in this adrenaline-pumping first-person shooter.',
        featured: true,
    },
    {
        id: '011',
        image: 'Media/Images/game11.jpg',
        company: 'Valve',
        item_name: 'Dota 2',
        original_price: 0,
        current_price: 0,
        discount_percentage: 0,
        genre: 'Strategy',
        description: 'Join the global phenomenon of competitive team-based battles in this free-to-play MOBA.',
        featured: false,
    },
    {
        id: '012',
        image: 'Media/Images/game12.jpg',
        company: 'FromSoftware',
        item_name: 'Elden Ring',
        original_price: 4999,
        current_price: 4499,
        discount_percentage: 10,
        genre: 'RPG',
        description: 'Explore a vast open world filled with secrets and challenges in this epic action RPG.',
        featured: false,
    },
    {
        id: '013',
        image: 'Media/Images/game13.jpeg',
        company: 'Codemasters',
        item_name: 'F1 2024',
        original_price: 4499,
        current_price: 3999,
        discount_percentage: 11,
        genre: 'Sports & Racing',
        description: 'Experience the thrill of Formula 1 racing with realistic graphics and intense competition.',
        featured: false,
    },
    {
        id: '014',
        image: 'Media/Images/game14.jpg',
        company: 'Bethesda',
        item_name: 'Fallout 4',
        original_price: 3999,
        current_price: 2999,
        discount_percentage: 25,
        genre: 'RPG',
        description: 'Survive in a post-apocalyptic wasteland filled with choices, danger, and adventure.',
        featured: false,
    },
    {
        id: '015',
        image: 'Media/Images/game15.jpg',
        company: 'EA Sports',
        item_name: 'FIFA 25',
        original_price: 4999,
        current_price: 3999,
        discount_percentage: 20,
        genre: 'Casual',
        description: 'Experience the next generation of football gaming with stunning visuals and realistic gameplay.',
        featured: false,
    },
    {
        id: '016',
        image: 'Media/Images/game16.jpg',
        company: 'Playground Games',
        item_name: 'Forza Horizon 4',
        original_price: 3499,
        current_price: 2999,
        discount_percentage: 14,
        genre: 'Sports & Racing',
        description: 'Race through the stunning seasons of Great Britain in this open-world driving adventure.',
        featured: false,
    },
    {
        id: '017',
        image: 'Media/Images/game17.jpg',
        company: 'Playground Games',
        item_name: 'Forza Horizon 5',
        original_price: 4499,
        current_price: 3999,
        discount_percentage: 11,
        genre: 'Sports & Racing',
        description: 'Explore the vibrant landscapes of Mexico in the latest installment of the Forza Horizon series.',
        featured: true,
    },
    {
        id: '018',
        image: 'Media/Images/game18.jpeg',
        company: 'miHoYo',
        item_name: 'Genshin Impact',
        original_price: 0,
        current_price: 0,
        discount_percentage: 0,
        genre: 'Adventure',
        description: 'Embark on a breathtaking journey in this open-world RPG filled with elemental magic and exploration.',
        featured: false,
    },
    {
        id: '019',
        image: 'Media/Images/game19.jpg',
        company: 'Sucker Punch Productions',
        item_name: 'Ghost of Tsushima',
        original_price: 4999,
        current_price: 4499,
        discount_percentage: 10,
        genre: 'Adventure',
        description: 'Become a samurai and protect the island of Tsushima from invading forces in this epic tale.',
        featured: true,
    },
    {
        id: '020',
        image: 'Media/Images/game20.jpg',
        company: 'Sony Santa Monica',
        item_name: 'God of War 4',
        original_price: 3999,
        current_price: 3499,
        discount_percentage: 13,
        genre: 'Action',
        description: 'Join Kratos and Atreus on their first journey through the Norse realms in this award-winning action game.',
        featured: false,
    },
    {
        id: '021',
        image: 'Media/Images/game21.jpg',
        company: 'Sony Santa Monica',
        item_name: 'God of War Ragnarök',
        original_price: 4999,
        current_price: 3999,
        discount_percentage: 20,
        genre: 'Action',
        description: 'Witness the epic conclusion to Kratos and Atreus’s Norse saga as they face the end of the world.',
        featured: true,
    },
    {
        id: '022',
        image: 'Media/Images/game22.jpg',
        company: 'Coffee Stain Studios',
        item_name: 'Goat Simulator',
        original_price: 1999,
        current_price: 1499,
        discount_percentage: 25,
        genre: 'Casual',
        description: 'Unleash chaos as a goat in this hilariously absurd simulation game.',
        featured: false,
    },
    {
        id: '023',
        image: 'Media/Images/game23.jpg',
        company: 'Rockstar Games',
        item_name: 'Grand Theft Auto V',
        original_price: 2999,
        current_price: 1999,
        discount_percentage: 33,
        genre: 'Action',
        description: 'Experience the sprawling open world of Los Santos in this iconic action-adventure game.',
        featured: true,
    },
    {
        id: '024',
        image: 'Media/Images/game24.jpg',
        company: 'Riot Games',
        item_name: 'League of Legends',
        original_price: 0,
        current_price: 0,
        discount_percentage: 0,
        genre: 'Strategy',
        description: 'Engage in fast-paced team battles in this legendary MOBA game.',
        featured: false,
    },
    {
        id: '025',
        image: 'Media/Images/game25.jpg',
        company: 'Eidos-Montréal',
        item_name: "Marvel's Guardians of the Galaxy",
        original_price: 3999,
        current_price: 2999,
        discount_percentage: 25,
        genre: 'Adventure',
        description: 'Lead the Guardians of the Galaxy in this action-packed and humorous space adventure.',
        featured: false,
    },
    {
        id: '026',
        image: 'Media/Images/game26.jpg',
        company: 'Mojang Studios',
        item_name: 'Minecraft',
        original_price: 1999,
        current_price: 1499,
        discount_percentage: 25,
        genre: 'Casual',
        description: 'Create, explore, and survive in this limitless sandbox adventure.',
        featured: true,
    },
    {
        id: '027',
        image: 'Media/Images/game27.jpg',
        company: '2K Sports',
        item_name: 'NBA 2K24',
        original_price: 3999,
        current_price: 3499,
        discount_percentage: 13,
        genre: 'Casual',
        description: 'Experience the excitement of basketball with the latest features and realistic gameplay.',
        featured: false,
    },
    {
        id: '028',
        image: 'Media/Images/game28.jpg',
        company: 'Electronic Arts',
        item_name: 'NFS Heat',
        original_price: 3499,
        current_price: 2999,
        discount_percentage: 14,
        genre: 'Sports & Racing',
        description: 'Race through the streets of Palm City and build your reputation in this thrilling street racing game.',
        featured: false,
    },
    {
        id: '029',
        image: 'Media/Images/game29.jpg',
        company: 'Ghost Games',
        item_name: 'NFS Rivals',
        original_price: 2999,
        current_price: 2499,
        discount_percentage: 17,
        genre: 'Sports & Racing',
        description: 'Compete as a racer or cop in this high-speed, open-world racing game.',
        featured: false,
    },
    {
        id: '030',
        image: 'Media/Images/game30.jpg',
        company: 'Rockstar Games',
        item_name: 'Red Dead Redemption 2',
        original_price: 3999,
        current_price: 2999,
        discount_percentage: 25,
        genre: 'Action',
        description: 'Experience the epic story of Arthur Morgan and the Van der Linde gang in the American frontier.',
        featured: true,
    },
    {
        id: '031',
        image: 'Media/Images/game31.jpg',
        company: 'Capcom',
        item_name: 'Resident Evil 4 (Remake)',
        original_price: 4999,
        current_price: 3999,
        discount_percentage: 20,
        genre: 'Action',
        description: 'Relive the iconic survival horror experience with modernized gameplay and stunning visuals.',
        featured: true,
    },
    {
        id: '032',
        image: 'Media/Images/game32.jpg',
        company: 'Crystal Dynamics',
        item_name: 'Rise of the Tomb Raider',
        original_price: 2999,
        current_price: 2499,
        discount_percentage: 17,
        genre: 'Adventure',
        description: 'Join Lara Croft in a journey to uncover ancient secrets and face dangerous foes.',
        featured: false,
    },
    {
        id: '033',
        image: 'Media/Images/game33.jpeg',
        company: 'Crystal Dynamics',
        item_name: 'Shadow of the Tomb Raider',
        original_price: 3499,
        current_price: 2999,
        discount_percentage: 14,
        genre: 'Adventure',
        description: 'Witness the defining moment of Lara Croft’s journey as she becomes the Tomb Raider.',
        featured: true,
    },
    {
        id: '034',
        image: 'Media/Images/game34.jpg',
        company: 'Insomniac Games',
        item_name: 'Spider-Man 2',
        original_price: 4999,
        current_price: 4499,
        discount_percentage: 10,
        genre: 'Action',
        description: 'Swing through the streets of New York as Peter Parker and Miles Morales in this superhero adventure.',
        featured: false,
    },
    {
        id: '035',
        image: 'Media/Images/game35.jpg',
        company: 'Blizzard Entertainment',
        item_name: 'StarCraft',
        original_price: 1999,
        current_price: 1499,
        discount_percentage: 25,
        genre: 'Strategy',
        description: 'Master the art of intergalactic warfare in this iconic real-time strategy game.',
        featured: false,
    },
    {
        id: '036',
        image: 'Media/Images/game36.jpeg',
        company: 'Naughty Dog',
        item_name: 'The Last of Us',
        original_price: 4999,
        current_price: 3999,
        discount_percentage: 20,
        genre: 'Adventure',
        description: 'Follow Joel and Ellie’s emotional journey through a post-apocalyptic world.',
        featured: false,
    },
    {
        id: '037',
        image: 'Media/Images/game37.jpg',
        company: 'Naughty Dog',
        item_name: 'The Last of Us Part II',
        original_price: 5999,
        current_price: 4999,
        discount_percentage: 17,
        genre: 'Adventure',
        description: 'Experience Ellie’s quest for revenge in this intense and gripping sequel.',
        featured: true,
    },
    {
        id: '038',
        image: 'Media/Images/game38.jpg',
        company: 'Electronic Arts',
        item_name: 'The Sims 3',
        original_price: 2499,
        current_price: 1999,
        discount_percentage: 20,
        genre: 'Casual',
        description: 'Create and control your own virtual world in this life simulation game.',
        featured: false,
    },
    {
        id: '039',
        image: 'Media/Images/game39.jpg',
        company: 'CD Projekt Red',
        item_name: 'The Witcher 3: Wild Hunt',
        original_price: 3999,
        current_price: 2999,
        discount_percentage: 25,
        genre: 'RPG',
        description: 'Embark on a thrilling quest as Geralt of Rivia in this open-world RPG masterpiece.',
        featured: false,
    },
    {
        id: '040',
        image: 'Media/Images/game40.jpg',
        company: 'Naughty Dog',
        item_name: 'Uncharted 4',
        original_price: 3499,
        current_price: 2999,
        discount_percentage: 14,
        genre: 'Action',
        description: 'Join Nathan Drake on his final adventure in this action-packed treasure-hunting saga.',
        featured: true,
    },
    {
        id: '041',
        image: 'Media/Images/game41.jpg',
        company: 'Riot Games',
        item_name: 'Valorant',
        original_price: 0,
        current_price: 0,
        discount_percentage: 0,
        genre: 'Action',
        description: 'Test your skills in this tactical first-person shooter with intense team-based gameplay.',
        featured: true,
    },
    {
        id: '042',
        image: 'Media/Images/game42.jpg',
        company: '2K Sports',
        item_name: 'WWE 2K25',
        original_price: 4999,
        current_price: 3999,
        discount_percentage: 20,
        genre: 'Sports & Racing',
        description: 'Step into the ring and dominate with your favorite wrestlers in this realistic wrestling simulator.',
        featured: false,
    },
];

