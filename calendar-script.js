document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek', // Default view
        headerToolbar: false, // We are using custom controls
        googleCalendarApiKey: 'YOUR_API_KEY_HERE', // <-- Replace with your API key
        events: [
            {
                googleCalendarId: 'c_1701ba16a0f9b84229e7b5f56b2c4341554a7c556462e50836266b088372a725@group.calendar.google.com',
                className: 'calendar1',
                color: '#2E86C1' // Color for Zoom 1
            },
            {
                googleCalendarId: 'c_oaogmtcpq5de868nteh1jinmak@group.calendar.google.com',
                className: 'calendar2',
                color: '#28B463' // Color for Zoom 2
            },
            {
                googleCalendarId: 'c_p6h96isdd7dgf8pgnvbma29c8k@group.calendar.google.com',
                className: 'calendar3',
                color: '#F1C40F' // Color for Zoom 3
            },
            {
                googleCalendarId: 'c_pmsf5h4i8ln3q0t80l8nrobbcg@group.calendar.google.com',
                className: 'calendar4',
                color: '#E74C3C' // Color for Zoom 4
            },
            {
                googleCalendarId: 'c_fthp27jhuv84npahns6ot2a49g@group.calendar.google.com',
                className: 'calendar5',
                color: '#9B59B6' // Color for Zoom 5
            },
            {
                googleCalendarId: 'c_70kc7oh9gv162r7jttkrhdqd4s@group.calendar.google.com',
                className: 'calendar6',
                color: '#1ABC9C' // Color for Zoom 6
            },
            {
                googleCalendarId: 'c_86tkb5hi6o6nnaa44qqd9v1omk@group.calendar.google.com',
                className: 'calendar7',
                color: '#E67E22' // Color for Zoom 7
            },
            {
                googleCalendarId: 'c_2g15mjcp7ving22u66llhotjhs@group.calendar.google.com',
                className: 'calendar8',
                color: '#34495E' // Color for Zoom 8
            },
            {
                googleCalendarId: 'c_9bf8e115bfdd188660486e854f2de70b2fcce6115f08a7bc7ca51c56a9e76ee3@group.calendar.google.com',
                className: 'calendar9',
                color: '#7D3C98' // Color for Zoom 9
            },
            {
                googleCalendarId: 'c_n2tns7767ji6aqc4j9ctkl805s@group.calendar.google.com',
                className: 'calendar10',
                color: '#5DADE2' // Color for Zoom 10
            },
            {
                googleCalendarId: 'c_5lq399fjv3puinehs8qmp06fpo@group.calendar.google.com',
                className: 'calendar11',
                color: '#F1948A' // Color for Zoom 11
            },
            {
                googleCalendarId: 'c_p5laa0q8bpqdm8fkgfeqpkakek@group.calendar.google.com',
                className: 'calendar12',
                color: '#48C9B0' // Color for Zoom 12
            },
            {
                googleCalendarId: 'c_9u8d0a0e9o97slc4prkud86ie0@group.calendar.google.com',
                className: 'calendar13',
                color: '#F39C12' // Color for Zoom 13
            },
            {
                googleCalendarId: 'c_m00ev5ljiq264on915b659pveg@group.calendar.google.com',
                className: 'calendar14',
                color: '#A569BD' // Color for Zoom 14
            },
            {
                googleCalendarId: 'c_tb4saratceal5d4j4int6gr2k0@group.calendar.google.com',
                className: 'calendar15',
                color: '#58D68D' // Color for Zoom 15
            },
            {
                googleCalendarId: 'c_nfqau5e8jkr0v8ik8864duhvd0@group.calendar.google.com',
                className: 'calendar16',
                color: '#DC7633' // Color for Zoom 16
            },
            {
                googleCalendarId: 'c_p51rd7987p4eido2eomb7ilsuc@group.calendar.google.com',
                className: 'calendar17',
                color: '#2874A6' // Color for Zoom 17
            },
            {
                googleCalendarId: 'c_n56u1v86rjifacdm7j8sf3ovt8@group.calendar.google.com',
                className: 'calendar18',
                color: '#EC7063' // Color for Zoom 18
            },
            {
                googleCalendarId: 'c_2j0et1ebv79fs448fkp3in5qsg@group.calendar.google.com',
                className: 'calendar19',
                color: '#85C1E9' // Color for Zoom 19
            },
            {
                googleCalendarId: 'c_b4q9uk98t26hrp72djnhqat23s@group.calendar.google.com',
                className: 'calendar20',
                color: '#AF7AC5' // Color for Zoom 20
            },
            {
                googleCalendarId: 'c_7egbshd9rl4hmhuq1bhb21tuus@group.calendar.google.com',
                className: 'calendar21',
                color: '#2ECC71' // Color for Zoom 21
            },
            {
                googleCalendarId: 'c_fjmlav9pkmfhdoeldgjbjfu3u8@group.calendar.google.com',
                className: 'calendar22',
                color: '#E74C3C' // Color for Zoom 22
            },
            {
                googleCalendarId: 'c_hubmin4j0vdncqsftgkitjet7c@group.calendar.google.com',
                className: 'calendar23',
                color: '#5499C7' // Color for Zoom 23
            },
            {
                googleCalendarId: 'c_847k16qt9evmd5hi8dj5bvp7d0@group.calendar.google.com',
                className: 'calendar24',
                color: '#F5B041' // Color for Zoom 24
            },
            {
                googleCalendarId: 'c_nnq1q5jiltrn9iv6lmq3vh910k@group.calendar.google.com',
                className: 'calendar25',
                color: '#52BE80' // Color for Zoom 25
            },
            {
                googleCalendarId: 'c_m3t7c929ivm3vkej9hp0pe89nk@group.calendar.google.com',
                className: 'calendar26',
                color: '#BB8FCE' // Color for Zoom 26
            },
            {
                googleCalendarId: 'c_8inp9o0fs8si71b8f5be8kfqoc@group.calendar.google.com',
                className: 'calendar27',
                color: '#F0B27A' // Color for Zoom 27
            },
            {
                googleCalendarId: 'c_988fd5115ff23ba8a17f2a483321607a801a817d0189f6d3e29afb641bd772e0@group.calendar.google.com',
                className: 'calendar28',
                color: '#48C9B0' // Color for Zoom 28
            }
        ],
        views: {
            timeGridWeek: { buttonText: 'week' },
            timeGridDay: { buttonText: 'day' },
            listDay: { buttonText: 'list' }
        },
        hiddenDays: [0, 6] // Only show weekdays
    });

    calendar.render();

    // Event listeners for toggling calendar visibility
    document.getElementById('calendar1-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar1', this.checked);
    });
    document.getElementById('calendar2-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar2', this.checked);
    });
    document.getElementById('calendar3-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar3', this.checked);
    });
    document.getElementById('calendar4-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar4', this.checked);
    });
    document.getElementById('calendar5-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar5', this.checked);
    });
    document.getElementById('calendar6-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar6', this.checked);
    });
    document.getElementById('calendar7-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar7', this.checked);
    });
    document.getElementById('calendar8-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar8', this.checked);
    });
    document.getElementById('calendar9-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar9', this.checked);
    });
    document.getElementById('calendar10-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar10', this.checked);
    });
    document.getElementById('calendar11-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar11', this.checked);
    });
    document.getElementById('calendar12-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar12', this.checked);
    });
    document.getElementById('calendar13-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar13', this.checked);
    });
    document.getElementById('calendar14-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar14', this.checked);
    });
    document.getElementById('calendar15-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar15', this.checked);
    });
    document.getElementById('calendar16-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar16', this.checked);
    });
    document.getElementById('calendar17-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar17', this.checked);
    });
    document.getElementById('calendar18-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar18', this.checked);
    });
    document.getElementById('calendar19-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar19', this.checked);
    });
    document.getElementById('calendar20-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar20', this.checked);
    });
    document.getElementById('calendar21-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar21', this.checked);
    });
    document.getElementById('calendar22-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar22', this.checked);
    });
    document.getElementById('calendar23-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar23', this.checked);
    });
    document.getElementById('calendar24-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar24', this.checked);
    });
    document.getElementById('calendar25-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar25', this.checked);
    });
    document.getElementById('calendar26-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar26', this.checked);
    });
    document.getElementById('calendar27-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar27', this.checked);
    });
    document.getElementById('calendar28-checkbox').addEventListener('change', function() {
        toggleCalendar(calendar, 'calendar28', this.checked);
    });

    // Function to toggle the calendar visibility
    function toggleCalendar(calendar, calendarClass, visible) {
        var events = calendar.getEvents();
        events.forEach(function(event) {
            if (event.classNames.includes(calendarClass)) {
                event.setProp('display', visible ? 'auto' : 'none');
            }
        });
    }

    // Function to switch calendar views
    window.switchView = function(view) {
        calendar.changeView(view);
    };
});

