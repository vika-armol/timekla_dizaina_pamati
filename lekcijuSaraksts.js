const days = [
    "Pirmdiena",
    "Otrdiena",
    "Trešdiena",
    "Ceturtdiena",
    "Piektdiena"
];

const events = [

    {
        day: "Pirmdiena",
        title: "ORACLE projektēšanas rīki",
        time: "10:30–12:10",
        start: 10.5,
        end: 12.16,
        color: "secondary"
    },

    {
        day: "Otrdiena",
        title: "Algoritmu teorija",
        time: "14:30–16:10",
        start: 14.5,
        end: 16.16,
        color: "orange"
    },
    
    {
        day: "Otrdiena",
        title: "Objektorientētā programmēšana",
        time: "16:30–18:05",
        start: 16.5,
        end: 18.07,
        color: "orange"
    },

    {
        day: "Trešdiena",
        title: "Tīmekļa dizaina pamati",
        time: "08:30–10:10",
        start: 8.5,
        end: 10.16,
        color: "primary"
    },

    {
        day: "Trešdiena",
        title: "Kombinatorika",
        time: "10:30–12:10",
        start: 10.5,
        end: 12.16,
        color: "secondary"
    },

    {
        day: "Trešdiena",
        title: "Datoru grafika un apstrādes pamati",
        time: "14:30–16:10",
        start: 14.5,
        end: 16.16,
        color: "secondary"
    },

    {
        day: "Trešdiena",
        title: "Tīmekļa dizaina pamati",
        time: "16:30–18:05",
        start: 16.5,
        end: 18.07,
        color: "primary"
    },

    {
        day: "Trešdiena",
        title: "Veselības traucējumi bērniem",
        time: "18:30–20:00",
        start: 18.5,
        end: 20.00,
        color: "primary"
    },

    {
        day: "Ceturtdiena",
        title: "Objektorientētā programmēšana",
        time: "16:30–18:05",
        start: 16.5,
        end: 18.07,
        color: "pink"
    },

    {
        day: "Ceturtdiena",
        title: "Objektorientētā programmēšana",
        time: "18:30–20:00",
        start: 18.5,
        end: 20.00,
        color: "pink"
    },

    {
        day: "Piektdiena",
        title: "Sporta aktivitātes I",
        time: "08:30–10:10",
        start: 8.5,
        end: 10.16,
        color: "orange"
    }

];

const startHour = 8;
const endHour = 20;
const hourHeight = 50;

const scheduleGrid = document.getElementById("scheduleGrid");

/* EMPTY TOP CELL */

const emptyCell = document.createElement("div");
emptyCell.classList.add("empty-cell");
scheduleGrid.appendChild(emptyCell);

/* DAYS */

days.forEach(day => {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day-header");
    dayElement.innerText = day;
    scheduleGrid.appendChild(dayElement);
});

/* TIME COLUMN */

const timeColumn = document.createElement("div");
timeColumn.classList.add("time-column");

for (let hour = startHour; hour <= endHour; hour++) {
    const hourLabel = document.createElement("div");
    hourLabel.classList.add("hour-label");
    hourLabel.innerText = `${hour}:00`;
    hourLabel.style.top = `${(hour - startHour) * hourHeight}px`;
    timeColumn.appendChild(hourLabel);
}

scheduleGrid.appendChild(timeColumn);

/* DAY COLUMNS */

days.forEach(day => {
    const column = document.createElement("div");
    column.classList.add("day-column");
    column.style.height = `${(endHour - startHour) * hourHeight}px`;

    /* GRID LINES */

    for (let i = 0; i < endHour - startHour; i++) {
        const line = document.createElement("div");
        line.classList.add("grid-line");
        line.style.height = `${hourHeight}px`;
        column.appendChild(line);
    }

    /* EVENTS */

    events
        .filter(event => event.day === day)
        .forEach(event => {
            const eventBlock = document.createElement("div");
            eventBlock.classList.add("event-block");
            eventBlock.classList.add(event.color);

            eventBlock.style.top =
                `${(event.start - startHour) * hourHeight}px`;
            eventBlock.style.height =
                `${(event.end - event.start) * hourHeight}px`;

            eventBlock.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.time}</p>
            `;

            column.appendChild(eventBlock);
        });

    scheduleGrid.appendChild(column);
});