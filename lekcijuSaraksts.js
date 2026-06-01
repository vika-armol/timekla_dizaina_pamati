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
        color: "primary"
    },

    {
        day: "Otrdiena",
        title: "Algoritmu teorija",
        time: "14:30–16:10",
        start: 14.5,
        end: 16.16,
        color: "primary"
    },

    {
        day: "Otrdiena",
        title: "Objektorientētā programmēšana",
        time: "16:30–18:05",
        start: 16.5,
        end: 18.07,
        color: "primary"
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
        color: "primary"
    },

    {
        day: "Trešdiena",
        title: "Datoru grafika un apstrādes pamati",
        time: "14:30–16:10",
        start: 14.5,
        end: 16.16,
        color: "primary"
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
        color: "primary"
    },

    {
        day: "Ceturtdiena",
        title: "Objektorientētā programmēšana",
        time: "18:30–20:00",
        start: 18.5,
        end: 20.00,
        color: "primary"
    },

    {
        day: "Piektdiena",
        title: "Sporta aktivitātes I",
        time: "08:30–10:10",
        start: 8.5,
        end: 10.16,
        color: "primary"
    },

    // Darbs + laiks ar draugiem/pastaigas

    {
        day: "Pirmdiena",
        title: "Darbs",
        time: "13:00–16:00",
        start: 13,
        end: 16,
        color: "orange"
    },

    {
        day: "Pirmdiena",
        title: "Vakara pastaiga",
        time: "17:00-18:30",
        start: 17,
        end: 18.50,
        color: "secondary"
    },

    {
        day: "Otrdiena",
        title: "Darbs",
        time: "08:00–12:00",
        start: 8,
        end: 12,
        color: "orange"
    },

    {
        day: "Ceturtdiena",
        title: "Darbs",
        time: "08:00–16:00",
        start: 8,
        end: 16,
        color: "orange"
    },

    {
        day: "Piektdiena",
        title: "Darbs",
        time: "10:30–16:30",
        start: 10.50,
        end: 16.50,
        color: "orange"
    },

    {
        day: "Piektdiena",
        title: "Laiks ar draugiem",
        time: "18:00–23:00",
        start: 18,
        end: 20,
        color: "secondary"
    }

];

const tooltip = document.getElementById("tooltip");

function showTooltip(text, x, y) {
    tooltip.innerText = text;
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";
    tooltip.classList.add("show");
}

function hideTooltip() {
    tooltip.classList.remove("show");
}

const startHour = 8;
const endHour = 20;
const hourHeight = 46;

const scheduleGrid = document.getElementById("scheduleGrid");

/* EMPTY CELL */
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
            eventBlock.classList.add("event-block", event.color);

            eventBlock.style.top =
                `${(event.start - startHour) * hourHeight}px`;

            eventBlock.style.height =
                `${(event.end - event.start) * hourHeight}px`;

            eventBlock.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>${event.time}</p>
                `;

            const interactiveTitles = [
                "Darbs",
                "Vakara pastaiga",
                "Laiks ar draugiem"
            ];

            if (interactiveTitles.includes(event.title)) {

                eventBlock.style.cursor = "pointer";

                eventBlock.addEventListener("mouseenter", (e) => {
                    showTooltip("Uzzināt vairāk!", e.clientX, e.clientY);
                });

                eventBlock.addEventListener("mousemove", (e) => {
                    showTooltip("Uzzināt vairāk!", e.clientX, e.clientY);
                });

                eventBlock.addEventListener("mouseleave", hideTooltip);

                eventBlock.addEventListener("click", () => {
                    document.getElementById("arpus").scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                });
            }

            column.appendChild(eventBlock);
        });

    scheduleGrid.appendChild(column);
});