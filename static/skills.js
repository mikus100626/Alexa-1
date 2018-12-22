const skille = [
    {
        prefix: 'kolor niebieski', 
        skill: function() {
            document.body.style.backgroundColor = 'blue'
        }

    },
    {
        prefix: 'kolor biały', 
        skill: function() {
            document.body.style.backgroundColor = 'white'
        }

    },
    {
        prefix: 'lewo', 
        skill: function() {
           document.body.style.justifyContent = 'start'
        }

    },
    {
        prefix: 'środek', 
        skill: function() {
           document.body.style.justifyContent = 'center'
           document.body.style.alignItems = 'center'
        }

    },
    {
        prefix: 'lewo', 
        skill: function() {
           document.body.style.justifyContent = 'end'
        }

    },
    {
        prefix: 'góra', 
        skill: function() {
           document.body.style.alignItems = 'flex-start'
        }

    },
    {
        prefix: 'dół', 
        skill: function() {
           document.body.style.alignItems = 'flex-end'
        }

    }
];

function execute(command) {
    const run = skille.find( (skill)=> command.includes(skill.prefix) );
    run.skill();
}