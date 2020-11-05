const element = document.getElementById('mondiv');
const bouton = document.getElementById('monbouton');

bouton.addEventListener('click',
    () => {
        fetch('http://localhost:8088/contacts')
            .then(rep => rep.json())
            .then(rep => {
                element.innerHTML = '';
                rep.map( c => {
                    element.innerHTML += '<li>' + c.prenom + ' ' + c.nom + '</li>';
                });
            });
    }
);
