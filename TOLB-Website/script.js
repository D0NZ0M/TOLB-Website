
/* =================================
   TOLB CREATOR DIRECTORY
================================= */

// Add approved TOLB creators here.
// Profiles are currently stored in this file.
// No database is connected yet.

const creators = [
    {        name: "DONZOM",
        initials: "DZ",
        platform: "Twitch",
        game: "Variety Gaming",
        description: "Gaming, streaming and community.",
        url: "https://www.twitch.tv/tolb_d0nz0m"
    }
    /*
    Example creator profile:

    {
        name: "Creator Username",
        initials: "CU",
        platform: "Twitch",
        game: "Variety Gaming",
        description: "Gaming, streaming and community.",
        url: "https://www.twitch.tv/username"
    },

    */

];

// Get website elements
const creatorGrid = document.getElementById("creatorGrid");
const creatorSearch = document.getElementById("creatorSearch");
const platformFilter = document.getElementById("platformFilter");

// Display creator profiles
function displayCreators() {

    if (!creatorGrid) return;

    const searchTerm = creatorSearch.value.toLowerCase();
    const selectedPlatform = platformFilter.value;

    const filteredCreators = creators.filter(creator => {

        const matchesSearch =
            creator.name.toLowerCase().includes(searchTerm) ||
            creator.game.toLowerCase().includes(searchTerm) ||
            creator.description.toLowerCase().includes(searchTerm);

        const matchesPlatform =
            selectedPlatform === "all" ||
            creator.platform === selectedPlatform;

        return matchesSearch && matchesPlatform;
    });

    creatorGrid.innerHTML = "";

    if (filteredCreators.length === 0) {

        creatorGrid.innerHTML = `
            <div class="creator-empty">
                <h3>CREATORS COMING SOON</h3>
                <p>
                    Our TOLB Creator Network is growing.
                    Check back soon to discover our creators.
                </p>
            </div>
        `;

        return;
    }

    filteredCreators.forEach(creator => {

        const card = document.createElement("article");
        card.className = "creator-card";

        const avatar = document.createElement("div");
        avatar.className = "creator-avatar";
        avatar.textContent = creator.initials;

        const name = document.createElement("h3");
        name.textContent = creator.name;

        const platform = document.createElement("div");
        platform.className = "creator-platform";
        platform.textContent = creator.platform;

        const game = document.createElement("p");
        game.className = "creator-game";
        game.textContent = "🎮 " + creator.game;

        const description = document.createElement("p");
        description.className = "creator-description";
        description.textContent = creator.description;

        const link = document.createElement("a");
        link.className = "creator-link";
        link.textContent = "VISIT CHANNEL";
        link.href = creator.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.append(
            avatar,
            name,
            platform,
            game,
            description,
            link
        );

        creatorGrid.appendChild(card);
    });
}

// Search and filtering
if (creatorSearch && platformFilter) {

    creatorSearch.addEventListener("input", displayCreators);

    platformFilter.addEventListener("change", displayCreators);

    displayCreators();
}

console.log("TOLB Creator Directory loaded!");
