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
        prefix: 'prawo', 
        skill: function() {
           document.body.style.justifyContent = 'flex-end'
           
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
        prefix: 'wyrównaj', 
        skill: function() {
           document.body.style.justifyContent = 'center'
           document.body.style.alignItems = 'center'
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

    },
    {
        prefix: 'nowa strona', 
        skill: function() {
            
            window.open('about:blank', "", fullscreen=1, true)
            
        
        }

    },

    {
        prefix: 'spam', 
        skill: function() {
            for(i=0;i=10;i++) {
                window.open('about:blank', "", fullscreen=1, true)
            
            }
        }

    },
    {
        prefix: 'despacito', 
        skill: function() {
          
            window.open('https://www.youtube.com/watch?v=1dHOuroDoVs', "", fullscreen=1, true)
        
        }

    },
    {
        prefix: 'youtube', 
        skill: function() {
            window.open('https://www.youtube.com/')

        }

    },
    {
        prefix: 'netflix', 
        skill: function() {
            window.open('https://www.netflix.com/')

        }

    },
    {
        prefix: 'steam', 
        skill: function() {
            window.open('https://store.steampowered.com/')

        }

    }
];

function execute(command) {
    const run = skille.find( (skill)=> command.includes(skill.prefix) );
    run.skill();
}