//creo array d'oggetti 
const team = [
    {
        'name':'Wayne Barnett',
        'role':'Founder & CEO',
        'image':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name':'Angela Caroll',
        'role':'Chief Editor',
        'image':'angela-caroll-chief-editor.jpg'
    },
    {
        'name':'Walter Gordon',
        'role':'Office Manager',
        'image':'walter-gordon-office-manager.jpg'
    },
    {
        'name':'Angela Lopez',
        'role':'Social Media Manager',
        'image':'angela-lopez-social-media-manager.jpg'
    },
    {
        'name':'Scott Estrada',
        'role':'Developer',
        'image':'scott-estrada-developer.jpg'
    },
    {
        'name':'Barbara Ramos',
        'role':'Graphic Designer',
        'image':'barbara-ramos-graphic-designer.jpg'
    }
];

//collego l'array alla classe team
const teamDom= document.querySelector('.team');


//stampo in console oggetti 
for (let i = 0; i < team.length; i ++) {

    console.log(team[i]['name'], team[i]['role'], team[i]['image']);

    drawTeamMembers(team[i]);

}

//stampo info in html
function drawTeamMembers (teamMember) {

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img'); 

    img.src = `./img/${teamMember.image}`;

    const h2 = document.createElement('h2');
    h2.innerText = teamMember.name;

    const h3 = document.createElement('h3');
    h3.innerText = teamMember.role ;

    card.append(img);
    card.append(h2);
    card.append(h3);

    teamDom.append(card);    
}