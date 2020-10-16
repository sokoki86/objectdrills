let greys = [
    {
        name: "Miranda Bailey",
        jobTitle: "Chief of Surgery",
    },

    {
        name: "Calli Torres",
        jobTitle: "Orthopedic Surgeon",
    },
    {
        name: "Meredith Grey",
        jobTitle: "General Surgeon",
    },
    {
        name: "Amelia Shepard",
        jobTitle: "Nuerosurgeon",
    },
    {
        name: "Maggie Pierce",
        jobTitle: "Cardiothoracic Surgeon"
           
    }

];


for(let i = 1; i < greys.length; i++) {
    greys[i].boss = greys[0].name;
}

for(let character of greys) {
    if(!character.boss) {
        console.log(`${character.jobTitle} ${character.name} doesn't report to anybody.`);
    } else {
        console.log(`${character.jobTitle} ${character.name} reports to ${character.boss}`);
    }
}