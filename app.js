const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: 'Allan Shore',
        age: 30,
        gender: 'male',
        lookingFor: 'female',
        location: 'Texas TX',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: 'Ellen Doe',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'Chicago IL',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        name: 'Rick Rimel',
        age: 45,
        gender: 'male',
        lookingFor: 'female',
        location: 'Los Angeles CAL',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Jerry Gladson',
        age: 21,
        gender: 'male',
        lookingFor: 'female',
        location: 'London UK',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },
    {
        name: 'Jessica Andrande',
        age: 25,
        gender: 'female',
        lookingFor: 'male',
        location: 'Vancouver CAN',
        image: 'https://randomuser.me/api/portraits/women/10.jpg'
    }
];

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', () => {

    let profile = profiles.next().value;
    if (profile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
        <li class="list-group-item">Name: ${profile.name}</li>
        <li class="list-group-item">Age: ${profile.age}</li>
        <li class="list-group-item">Gender: ${profile.gender}</li>
        <li class="list-group-item">Looking for: ${profile.lookingFor}</li>
        <li class="list-group-item">Location: ${profile.location}</li>
        </ul>
    `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${profile.image}">`;
            
    }
    else {
window.location.reload();
    }


});

//Profile iterator
function profileIterator(data) {
    let index = 0;

    return {
        next: () =>
            index < data.length ?
                { value: data[index++], done: false }
                :
                { done: true }

    }
}
