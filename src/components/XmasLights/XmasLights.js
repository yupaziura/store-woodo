import { useEffect } from "react";

import './XmasLights.scss'

const Lights = () => {

    let christmas = {
        delay: null,
        delete: function(){
            document.body.querySelectorAll('.christmas-lights').forEach(function(ul){
                ul.remove();
            });
        },
        create: function(){
            let h = window.innerWidth / 60 + 2,
                data = {
                    'top': h,
                    
                },
                ul = null,
                c = ul;
            for (let position in data) {
                c = data[position];
                ul = document.createElement('ul');
                ul.className = 'christmas-lights';
                ul.dataset.position = position;
                for (let i = 0; i <= c; i++) {
                    ul.append(document.createElement('li'));
                }
                document.body.append(ul);
            }
        }
    }

    useEffect(()=> {
        
            christmas.create();
        
    }, [])
     
    
     
    window.addEventListener('resize', function(e) {
        clearTimeout(christmas.delay);
        christmas.delay = setTimeout(function(){
            christmas.delete();
            christmas.create();
        }, 100)
    });
    return (
        <>
        </>
    )
}

export default Lights;