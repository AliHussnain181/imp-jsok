const generateBtn = document.getElementById('generate-btn');
const responseTextarea = document.getElementById('response-textarea');

const placeholders = {
    name: ['John', 'Jane', 'Bob', 'Alice', 'David', 'Sarah', 'Michael', 'Emily', 'Matthew', 'Olivia', 'Ava', 'Ethan', 'Liam', 'Noah', 'Sophia', 'Mia', 'Isabella', 'Charlotte', 'Abigail', 'Harper', 'Avery', 'Evelyn', 'Madison', 'Amelia', 'Ella', 'Elizabeth', 'Sofia', 'Victoria', 'Chloe', 'Grace', 'Lily', 'Hannah', 'Natalie', 'Zoe', 'Aaliyah', 'Brielle', 'Camila', 'Daphne', 'Evangeline', 'Faith', 'Gabriella', 'Hazel', 'Ivy', 'Julia', 'Katherine', 'Lila', 'Makayla', 'Nora', 'Ophelia', 'Penelope', 'Quinn', 'Riley', 'Scarlett', 'Trinity', 'Violet', 'Willow', 'Ximena', 'Yaretzi', 'Zara'],
    email: ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com'],
    age: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    gender: ['Male', 'Female', 'Non-binary'],
    city: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston', 'Nashville', 'El Paso', 'Detroit', 'Memphis', 'Portland', 'Oklahoma City', 'Las Vegas', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Mesa', 'Atlanta', 'Kansas City', 'Colorado Springs', 'Miami', 'Raleigh', 'Omaha', 'Long Beach', 'Virginia Beach', 'Oakland', 'Minneapolis', 'Tulsa', 'Wichita', 'New Orleans', 'Arlington', 'Tampa', 'Aurora', 'Santa Ana', 'St. Louis', 'Pittsburgh', 'Corpus Christi', 'Riverside', 'Cincinnati', 'Lexington', 'Anchorage', 'Stockton', 'Toledo', 'Saint Paul', 'Newark', 'Greensboro', 'Buffalo', 'Plano', 'Lincoln', 'Henderson', 'Fort Wayne', 'Jersey City', 'St. Petersburg', 'Chula Vista', 'Norfolk', 'Orlando', 'Chandler', 'Laredo', 'Madison', 'Winston-Salem', 'Lubbock', 'Baton Rouge', 'Durham', 'Garland', 'Glendale', 'Reno', 'Hialeah', 'Chesapeake', 'Scottsdale', 'North Las Vegas', 'Irving', 'Fremont', 'Irvine', 'Birmingham', 'Rochester', 'San Bernardino', 'Spokane', 'Gilbert', 'Arlington'],
    state: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
};

const generateRandomValue = (placeholder) => {
    const values = placeholders[placeholder];
    return values[Math.floor(Math.random() * values.length)];
};

const generateRandomJSONResponse = () => {
    const jsonResponse = {
        name: '{{name}}',
        email: '{{email}}',
        age: '{{age}}',
        gender: '{{gender}}',
        address: {
            city: '{{city}}',
            state: '{{state}}'
        }
    };

    for (const key in jsonResponse) {
        if (typeof jsonResponse[key] === 'object') {
            for (const subKey in jsonResponse[key]) {
                jsonResponse[key][subKey] = generateRandomValue(subKey.toLowerCase());
            }
        } else {
            jsonResponse[key] = generateRandomValue(key.toLowerCase());
        }
    }

    return JSON.stringify(jsonResponse, null, 2);
};

generateBtn.addEventListener('click', () => {
    const randomJSONResponse = generateRandomJSONResponse();
    responseTextarea.value = randomJSONResponse;
});
