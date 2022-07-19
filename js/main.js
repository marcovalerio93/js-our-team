//creo array d'oggetti 
const team = [
    {
        'name':'Wayne Barnett',
        'role':'Founder & CEO',
        'img':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name':'Angela Caroll',
        'role':'Chief Editor',
        'img':'angela-caroll-chief-editor.jpg'
    },
    {
        'name':'Walter Gordon',
        'role':'Office Manager',
        'img':'walter-gordon-office-manager.jpg'
    },
    {
        'name':'Angela Lopez',
        'role':'Social Media Manager',
        'img':'angela-lopez-social-media-manager.jpg'
    },
    {
        'name':'Scott Estrada',
        'role':'Developer',
        'img':'scott-estrada-developer.jpg'
    },
    {
        'name':'Barbara Ramos',
        'role':'Graphic Designer',
        'img':'barbara-ramos-graphic-designer.jpg'
    }
];

const teamDom


//stampo in console oggetti 
for (let i = 0; i < team.length; i ++) {
    console.log(team[i]['name'], team[i]['role'], team[i]['img']);
    drawTeamMembers(team[i]);

}
//stampo info in html
function drawTeamMembers(teamMeber) [
    const card = docoument.createElement('div');
    card.classlst.add('card');
    
]