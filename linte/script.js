// Mock Book Data
const books = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", category: "fiction", img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg", desc: "A dazzling novel about all the choices that go into a life well lived." },
    { id: 2, title: "Project Hail Mary", author: "Andy Weir", category: "sci-fi", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1764703833i/54493401.jpg", desc: "A lone astronaut must save the earth from disaster in this propulsive SF thriller." },
    { id: 3, title: "Atomic Habits", author: "James Clear", category: "educational", img: "https://cdn.kobo.com/book-images/3e453d1c-61a3-4ed6-b5fe-6232d6483c08/1200/1200/False/atomic-habits-tiny-changes-remarkable-results.jpg", desc: "An easy & proven way to build good habits & break bad ones." },
    { id: 4, title: "The Hitchhiker's Guide", author: "Douglas Adams", category: "comedy", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg", desc: "A hilarious journey across the galaxy with Arthur Dent and his towel." },
    { id: 5, title: "The Shining", author: "Stephen King", category: "horror", img: "https://m.media-amazon.com/images/I/81ecUqCSEUL._AC_UF350,350_QL50_.jpg", desc: "A family heads to an isolated hotel for the winter where an evil spiritual presence lurks." },
    { id: 6, title: "The Name of the Wind", author: "Patrick Rothfuss", category: "fantasy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhBNv0GRANOxmpOhfArIHUB5bIIfOKXTQFg&s", desc: "The tale of Kvothe, from his childhood in a troupe of traveling players to his time at a magic school." },
    { id: 7, title: "Normal People", author: "Sally Rooney", category: "drama", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulpGBbgj5Iuch8NcxbfKKKiYpFJMQ0TtAVA&s", desc: "A complex exploration of the relationship between two young people as they grow up." },
    { id: 8, title: "The Notebook", author: "Nicholas Sparks", category: "romance", img: "https://upload.wikimedia.org/wikipedia/en/d/d9/The_Notebook_Cover.jpg", desc: "A heart-wrenching love story that spans decades and defies the odds." },
    { id: 9, title: "The Gray Man", author: "Mark Greaney", category: "action", img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1335649192i/6547865.jpg", desc: "A high-stakes thriller following an elite assassin on the run." },
    { id: 10, title: "Brief Answers to Big Questions", author: "Stephen Hawking", category: "educational", img: "https://upload.wikimedia.org/wikipedia/en/6/61/BriefAnswersToTheBigQuestions-BookCover.png", desc: "The world-famous cosmologist's final thoughts on the universe's biggest mysteries." },
    { id: 11, title: "Born a Crime", author: "Trevor Noah", category: "comedy", img: "https://cdn.kobo.com/book-images/48fc5df0-a8e0-4c24-8dd5-9d836d29296a/1200/1200/False/born-a-crime.jpg", desc: "A mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist." },
    { id: 12, title: "Bird Box", author: "Josh Malerman", category: "horror", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Bird_Box_2014_book_cover.jpg", desc: "Five years after it began, a mother and her two children must navigate a river blindfolded." }
];

// --- GLOBAL FUNCTIONS (Needed for HTML onclick events) ---

window.openModal = function(id) {
    const book = books.find(b => b.id === id);
    const modal = document.getElementById('bookModal');
    const body = document.getElementById('modalBody');
    if (modal && body) {
        body.innerHTML = `
            <div class="modal-flex">
                <img src="${book.img}" style="width: 200px; border-radius: 10px;">
                <div>
                    <h2>${book.title}</h2>
                    <p><strong>By:</strong> ${book.author}</p>
                    <p style="margin-top: 15px;">${book.desc}</p>
                </div>
            </div>`;
        modal.style.display = "block";
    }
};

window.startReading = function(id) {
    const book = books.find(b => b.id === id);
    const overlay = document.getElementById('readerOverlay');
    if (overlay) {
        document.getElementById('readingTitle').innerText = book.title;
        document.getElementById('readingAuthor').innerText = book.author;
        document.getElementById('textContent').innerHTML = generateStory(book);
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

let fontSize = 1.25;
window.changeFontSize = function(delta) {
    fontSize += delta * 0.1;
    const text = document.getElementById('textContent');
    if (text) text.style.fontSize = fontSize + 'rem';
};

function generateStory(book) {
    const categoryParagraphs = {
        fiction: [
            "In the quiet moments of reflection, Nora Seed pondered the infinite possibilities that life could offer. Each choice she had made or avoided shaped the tapestry of her existence, revealing layers of regret and potential that she never knew existed.",
            "The Midnight Library stood as a beacon between worlds, a place where the boundaries of reality blurred. Nora wandered its endless shelves, each book representing a life she could have lived, filled with love, adventure, and unforeseen consequences.",
            "As Nora opened the first book, she found herself in a life where she had pursued her passion for music. The stage lights illuminated her face, and the applause of the crowd echoed her triumphs, yet she sensed the hollow ache of unfulfilled dreams in other directions.",
            "In another volume, Nora experienced the warmth of family life she had chosen to delay. Children laughed around her, and the simple joys of parenthood filled her days, but the career ambitions she had set aside whispered of what might have been.",
            "The library's infinite wisdom showed Nora the fragility of human connections. Friendships forged and lost, loves kindled and extinguished, each path revealing the delicate balance between solitude and companionship that defined her journey.",
            "Nora encountered lives where she had traveled the world, her footsteps tracing ancient paths and modern cities alike. The cultures she immersed herself in broadened her horizons, yet the pull of home reminded her of roots she had nearly forgotten.",
            "In one particularly poignant story, Nora lived a life of quiet scholarship, surrounded by books and the pursuit of knowledge. The intellectual fulfillment was profound, but the human connections she had avoided left an emptiness that no amount of wisdom could fill.",
            "The Midnight Library challenged Nora to confront her deepest fears and regrets. Each book peeled back layers of her psyche, revealing the person she could become if only she dared to make different choices in the present moment.",
            "As the hours passed in this liminal space, Nora began to understand that every life, no matter how seemingly perfect, carried its own burdens and joys. The key was not in finding the ideal path, but in embracing the one she was currently walking.",
            "Finally, Nora emerged from the library with a renewed sense of purpose. The infinite possibilities she had glimpsed taught her that life was not about the roads not taken, but about the courage to choose and the wisdom to learn from every step along the way."
        ],
        "sci-fi": [
            "Dr. Ryland Grace awoke in the claustrophobic confines of his spacecraft, the cold vacuum of space pressing against the hull like an indifferent god. The Hail Mary mission had begun, and Earth depended on his ingenuity to solve the astrophage crisis that threatened all life.",
            "As the lone survivor of a doomed expedition, Ryland faced the impossible task of understanding an alien technology that could save humanity. The ship's AI, Rocky, communicated through a series of beeps and gestures, bridging the gap between human and extraterrestrial intelligence.",
            "The journey to Tau Ceti took months of isolation and experimentation. Ryland's mind raced with calculations and hypotheses, each failure bringing him closer to despair, yet each small success ignited hope in the vast darkness of space.",
            "Rocky's species, the Eridians, had faced a similar crisis eons ago. Through painstaking collaboration, Ryland learned about their biology, their history, and their desperate gamble to preserve life across the stars.",
            "The astrophage, a microscopic organism that devoured all energy sources, had nearly extinguished both civilizations. Ryland's mission was to find a way to weaponize the very threat that had brought him to this point.",
            "In the quiet moments between experiments, Ryland reflected on humanity's place in the universe. The discovery of intelligent life changed everything, forcing him to confront the arrogance of assuming Earth was unique in its struggles.",
            "The ship's systems hummed with borrowed alien technology, a testament to the universal language of science. Ryland pushed the boundaries of physics and biology, creating solutions that would have been impossible without Rocky's insights.",
            "As the mission progressed, Ryland formed an unlikely bond with his extraterrestrial companion. Trust built slowly through shared purpose, transcending the barriers of language and biology to create a friendship that spanned worlds.",
            "The climax approached as Ryland prepared to return to Earth with the key to salvation. The sacrifices made and lessons learned would forever alter humanity's understanding of its place in the cosmos.",
            "In the end, the Hail Mary was not just a mission to save Earth, but a testament to the resilience of intelligent life. Ryland's journey proved that even in the face of extinction, curiosity and cooperation could light the way forward."
        ],
        educational: [
            "James Clear's exploration of habit formation begins with the understanding that small changes compound over time. Atomic Habits reveals how tiny improvements, when consistently applied, can lead to remarkable transformations in our lives.",
            "The book delves into the psychology of behavior change, explaining why willpower alone is insufficient for lasting improvement. Instead, Clear advocates for designing environments that make good habits inevitable and bad ones difficult.",
            "Through the lens of the 1% rule, Clear demonstrates how marginal gains accumulate to create significant results. Whether in personal development or organizational success, these small advantages compound into extraordinary achievements.",
            "Identity-based habits form the core of Clear's philosophy. By focusing on who we wish to become rather than what we want to achieve, we create sustainable change that aligns with our deepest values and aspirations.",
            "The concept of habit stacking is introduced as a practical method for building new routines. By attaching desired behaviors to existing habits, we leverage the brain's tendency to follow established patterns.",
            "Clear addresses the importance of immediate rewards in habit formation. By making habits satisfying in the moment, we ensure they stick, even when long-term benefits seem distant.",
            "The book explores the role of community and culture in shaping our habits. Surrounding ourselves with people who reinforce positive behaviors creates an environment conducive to growth and improvement.",
            "Through real-world examples and scientific research, Clear illustrates how habits operate on a neurological level. Understanding the cue-response-reward loop empowers us to redesign our behaviors consciously.",
            "The plateau of latent potential is a key insight, explaining why progress often feels slow before breakthroughs occur. Patience and persistence become crucial virtues in the journey of self-improvement.",
            "Ultimately, Atomic Habits provides a comprehensive framework for personal transformation. By mastering the art of habit formation, we gain the power to shape our destinies and create the lives we truly desire."
        ],
        comedy: [
            "Douglas Adams' Hitchhiker's Guide to the Galaxy begins with the mundane destruction of Arthur Dent's home to make way for a bypass. This absurd premise sets the tone for a journey through the most ridiculous corners of the universe.",
            "Arthur Dent, an unassuming Englishman, finds himself thrust into intergalactic adventure when his friend Ford Prefect reveals himself as an alien researcher. Together, they embark on a series of increasingly improbable escapades.",
            "The Guide itself becomes a character, offering useless yet hilariously accurate advice about the universe. Its entries on everything from towels to the meaning of life provide comic relief amidst the chaos.",
            "Zaphod Beeblebrox, the two-headed, three-armed president of the galaxy, embodies the absurdity of power and celebrity. His quest for the ultimate question to life's ultimate answer drives much of the plot's lunacy.",
            "The Restaurant at the End of the Universe serves as a backdrop for philosophical musings disguised as comedy. Patrons dine while contemplating the futility of existence, all while enjoying improbably good food.",
            "Marvin the Paranoid Android provides deadpan humor with his constant complaints about the meaninglessness of life. His depressive outlook contrasts sharply with the optimistic absurdity surrounding him.",
            "The Vogons, bureaucratic aliens with a penchant for terrible poetry, represent the worst aspects of government inefficiency. Their demolition of Earth for a hyperspace bypass is both horrifying and hilariously petty.",
            "Throughout the story, Adams skewers human pretensions and societal norms. The search for ultimate knowledge reveals that the universe is far more interested in partying than profound truths.",
            "The improbability drive, a technology that makes the impossible probable, powers much of the narrative's wild twists. It symbolizes the chaotic nature of existence and the joy of embracing uncertainty.",
            "In the end, the Hitchhiker's Guide teaches that life, the universe, and everything are best approached with a sense of humor. Arthur's journey transforms him from a confused everyman to a cosmic wanderer with a towel and a smile."
        ],
        horror: [
            "Stephen King's The Shining unfolds in the isolated Overlook Hotel, where the Torrance family takes up residence for the winter. The hotel's malevolent presence begins to unravel Jack Torrance's fragile sanity.",
            "Danny Torrance, with his psychic gift of 'the shining,' senses the hotel's dark secrets long before his parents. His imaginary friend Tony warns of the horrors that await, setting the stage for terror.",
            "Jack Torrance, a recovering alcoholic and aspiring writer, hopes the isolation will provide time for his work. Instead, the hotel's supernatural influences amplify his inner demons, leading to increasingly violent outbursts.",
            "The hedge animals that come to life in the maze represent the hotel's ability to blur reality and nightmare. Their pursuit of Danny symbolizes the inescapable nature of the Overlook's evil.",
            "Wendy Torrance fights to protect her son from her husband's descent into madness. Her resourcefulness and determination become crucial as the supernatural threats escalate.",
            "The Overlook's history of violence and tragedy seeps into the present, manifesting as ghosts and poltergeist activity. Each room holds a story of horror that contributes to the building dread.",
            "Danny's shining allows him to see the hotel's past atrocities, including murders and suicides. This knowledge burdens him with visions that blur the line between past and present horrors.",
            "Jack's typewriter becomes a symbol of his creative potential twisted into destructive rage. The novel he writes in the hotel reflects his own psychological disintegration.",
            "The winter storm isolates the family completely, heightening the sense of claustrophobia and inevitability. Escape seems impossible as the hotel's power grows stronger.",
            "In the climax, the battle between good and evil plays out in the snowy maze. Danny's innocence and Wendy's courage stand against the hotel's ancient malevolence, determining the family's fate."
        ],
        fantasy: [
            "Patrick Rothfuss' The Name of the Wind chronicles the life of Kvothe, a gifted young man whose destiny intertwines with magic, music, and mystery. His journey from street urchin to legendary figure begins in the University.",
            "The University serves as a hub of magical learning, where sympathy and sympathy dominate the curriculum. Kvothe's prodigious talent sets him apart, but also attracts dangerous attention from rivals and enemies.",
            "Kvothe's backstory unfolds through his own narration, revealing a childhood marked by tragedy and wonder. The death of his parents and the destruction of his troupe shape his resilient and ambitious character.",
            "The art of sympathy allows users to manipulate the world through connections and will. Kvothe masters this skill, using it for both practical purposes and spectacular demonstrations of power.",
            "Music plays a central role in Kvothe's life, serving as both a means of expression and a source of magic. His performances captivate audiences and reveal the deeper harmonies of the universe.",
            "The Chandrian, mysterious and deadly figures from legend, become central to Kvothe's quest for knowledge. His pursuit of their secrets leads him into perilous adventures and moral dilemmas.",
            "Kvothe's relationships with figures like the mysterious Denna and the stern Master Elodin add emotional depth to his story. Love, friendship, and rivalry complicate his path to greatness.",
            "The world's magic system is intricately detailed, with naming and sympathy providing limitless possibilities. Kvothe's discoveries push the boundaries of what is known and possible.",
            "Themes of loss, ambition, and the cost of power permeate the narrative. Kvothe's experiences teach him that true wisdom comes at great personal expense.",
            "As Kvothe's tale unfolds, it becomes clear that his story is one of transformation. From a boy with a lute to a man wielding unimaginable power, his journey explores the essence of heroism and humanity."
        ],
        drama: [
            "Sally Rooney's Normal People examines the complex relationship between Marianne and Connell, two young people from different social backgrounds whose lives intersect in unexpected ways. Their story explores love, class, and personal growth.",
            "Marianne, intelligent and socially awkward, finds an unexpected connection with Connell, the popular athlete. Their secret relationship challenges the social hierarchies of their small Irish town.",
            "As they navigate high school and university, Marianne and Connell's paths diverge and converge. Distance and differing experiences test the strength of their bond and their individual identities.",
            "Connell struggles with his feelings for Marianne, torn between societal expectations and genuine emotion. His internal conflict reflects broader themes of masculinity and vulnerability.",
            "Marianne's journey involves confronting her family's dysfunction and her own self-destructive tendencies. Her relationship with Connell becomes a catalyst for personal transformation.",
            "The novel delves into the nuances of communication and misunderstanding in relationships. Small gestures and unspoken words carry immense weight in shaping Marianne and Connell's dynamic.",
            "Social class differences create tension throughout the story, influencing how Marianne and Connell perceive themselves and each other. Their attempts to bridge this gap reveal deeper societal divides.",
            "Mental health and emotional intimacy are explored through Marianne's struggles and Connell's supportive role. Their relationship becomes a space for healing and mutual understanding.",
            "As the characters mature, they face the realities of adult life and the choices that define their futures. The novel questions whether love can transcend the barriers of time and circumstance.",
            "Normal People ultimately portrays the messiness of human connection. Marianne and Connell's story affirms that relationships, with all their imperfections, are essential to personal growth and self-discovery."
        ],
        romance: [
            "Nicholas Sparks' The Notebook tells the story of Noah and Allie, two young lovers from different worlds whose romance defies time and tragedy. Their enduring love story spans decades and overcomes countless obstacles.",
            "Noah, a working-class young man, falls deeply in love with Allie, a wealthy socialite. Their summer romance blossoms amidst the beauty of the North Carolina coast, but societal pressures threaten to tear them apart.",
            "Separated by war and family expectations, Noah and Allie attempt to move on with their lives. Yet, the memory of their love persists, influencing every relationship and decision they make.",
            "Years later, an elderly Noah reads from a notebook to his wife, Allie, who suffers from Alzheimer's. The stories he shares reconnect her with their shared past and the passion they once knew.",
            "The novel explores the themes of fate and choice in matters of the heart. Noah and Allie's love seems predestined, yet their journey requires constant effort and sacrifice to maintain.",
            "Allie's privileged background clashes with Noah's humble roots, creating external conflicts that mirror the internal struggles of young love. Their relationship challenges societal norms and personal insecurities.",
            "The passage of time tests the strength of Noah and Allie's commitment. As they face illness, loss, and the ravages of age, their love proves resilient and transformative.",
            "Sparks weaves a tale of devotion that transcends physical and mental decline. Noah's unwavering dedication to Allie becomes a testament to the power of true love.",
            "The notebook itself symbolizes the enduring nature of memory and emotion. Through its pages, Noah preserves not just their story, but the essence of their connection.",
            "In the end, The Notebook celebrates the idea that love, when genuine and nurtured, can conquer all. Noah and Allie's story inspires hope that soulmates exist and that love can last a lifetime."
        ],
        action: [
            "Mark Greaney's The Gray Man follows Court Gentry, a legendary assassin known as the Gray Man, as he becomes the target of his former employers. His skills in evasion and combat drive a high-stakes game of cat and mouse.",
            "Court's decision to spare a witness marks the beginning of his troubles with the CIA. Now hunted by his own government, he must use every ounce of his training to survive and protect those he cares about.",
            "The novel's fast-paced action sequences showcase Court's expertise in hand-to-hand combat, marksmanship, and improvisation. Each encounter pushes the limits of human capability and ingenuity.",
            "Court's moral code complicates his role as an assassin. His reluctance to kill indiscriminately creates internal conflict amidst the external threats he faces.",
            "Alliances form and break as Court navigates a web of international intrigue. From Russian oligarchs to CIA operatives, the cast of characters adds layers of complexity to the thriller.",
            "The global setting takes Court from the streets of Europe to remote hideouts, highlighting the international nature of modern espionage. Each location brings new dangers and opportunities.",
            "Court's physical and mental endurance is tested throughout the story. His ability to think several moves ahead keeps him one step ahead of his pursuers.",
            "The Gray Man explores themes of loyalty and betrayal in the world of covert operations. Court's journey forces him to question his loyalties and redefine his purpose.",
            "Technological elements, from surveillance to advanced weaponry, add realism to the action. Court's knowledge of these tools becomes crucial in his fight for survival.",
            "Ultimately, The Gray Man is a tale of redemption and resilience. Court's transformation from government weapon to independent operator reflects broader themes of identity and freedom in a dangerous world."
        ]
    };
    
    let storyHTML = `<h1>${book.title}</h1><p style="text-align:center"><i>The complete digital edition</i></p><br>`;
    const paragraphs = categoryParagraphs[book.category] || categoryParagraphs.fiction;
    for (let i = 1; i <= 3; i++) {
        storyHTML += `<h2>Chapter ${i}</h2>`;
        for (let j = 0; j < 10; j++) {
            const paraIndex = j % paragraphs.length;
            storyHTML += `<p>${paragraphs[paraIndex]}</p>`;
        }
    }
    return storyHTML;
}

// --- DOM CONTENT LOADED (Main Logic) ---

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // Books Rendering
    const bookGrid = document.getElementById('bookGrid');
    if (bookGrid) {
        function renderBooks(data) {
            bookGrid.innerHTML = data.map(book => `
                <div class="book-card">
                    <img src="${book.img}" alt="${book.title}" class="book-img">
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <div class="card-btns">
                            <button class="cta-btn" onclick="openModal(${book.id})">Details</button>
                            <button class="cta-btn read-btn" onclick="startReading(${book.id})">Read</button>
                        </div>
                    </div>
                </div>`).join('');
        }
        renderBooks(books);

        document.getElementById('searchBar').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            renderBooks(books.filter(b => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)));
        });

        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            const cat = e.target.value;
            renderBooks(cat === 'all' ? books : books.filter(b => b.category === cat));
        });
    }

    // Exit Reader
    const exitBtn = document.getElementById('exitReader');
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            document.getElementById('readerOverlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
});

// Global Window Click for Modal
window.onclick = (event) => {
    const modal = document.getElementById('bookModal');
    if (event.target === modal || event.target.classList.contains('close-modal')) {
        modal.style.display = "none";
    }
};