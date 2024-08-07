personalMods = [
    {
        img: "img/more-peripherals.png",
        title: "More Peripherals",
        downloads: "150k+",
        desc: "An CC:Tweaked Addon that adds some more peripherals to existing blocks and adds some QoL items to ComputerCraft",
        links: [
            {
                key: "Curseforge",
                href: "https://www.curseforge.com/minecraft/mc-mods/more-peripherals",
            },
            {
                key: "Modrinth",
                href: "https://modrinth.com/mod/more-peripherals",

            },
            {
                key: "Github",
                href: "https://github.com/JheffersonMarques/MorePeripherals"
            }
        ]
    },
    {
        img: "img/kawaii-dishes.png",
        title: "Kawaii Dishes",
        desc: "A food mod based on the aesthetics of a Maid Cafés, adding animated armors, coffee brewing, ice cream making, and even making some pastries",
        downloads: "100k+",
        links: [
            {
                key: "Curseforge",
                href: "https://www.curseforge.com/minecraft/mc-mods/kawaii-dishes"
            },
            {
                key: "Modrinth",
                href: "https://modrinth.com/mod/kawaii-dishes"
            },
            {
                key: "Github",
                href: "https://github.com/JheffersonMarques/KawaiiDishes"
            }
        ]
    },
    {
        img: "img/wip.png",
        title: "Wandrous (WIP)",
        desc: "A magic mod inspired by Noita's spell system, create wands, mix modifiers, make cool spells!",
        links: [
            {
                key: "Github",
                href: "https://github.com/JheffersonMarques/Wandrous"
            }
        ]
    },
]

function makeCard(data) {
    return `<div class="mod-card">
        <div class="mod-card-header">
            <img class="mod-card-icon"src="${data.img}"/>
        </div>
        <div class="mod-card-content">
            <h1 class="mod-card-title">${data.title}</h1>    
            ${data.downloads != undefined ? ('<span class="mod-downloads">'+ data.downloads + " downloads </span>") : ""}
            <div class="mod-card-desc">
                ${data.desc}
            </div>
            <div class="mod-card-footer">
                ${makeButtons(data)}
            </div>
        </div>
    </div>`
}

function makeButtons(data) {
    let buttons = "";

    data.links.forEach(button => {
        buttons += `<a target="__blank" class="button" href="${ button.href }">${ button.key }</a>`
    })

    return buttons;
}

function populate() {
    let personal = document.getElementById("personal");
    personalMods.forEach(element => {
        personal.innerHTML += makeCard(element)
    });
}
