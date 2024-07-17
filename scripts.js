// scripts.js
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const messageElement = document.getElementById('greeting');
    const heading = document.getElementById('main-heading');

    
    let message = '';
    
    switch(department) {
        case 'it':
            message = `This is mOha speaking, I know unakkum veala 
            illa enakkum veala illa😆!, But irundhaalum All the best for your future!`;
            break;
        case 'english':
            message = `This is mOha speaking, I think neega inda patta happy aa 
            eeppeenga ippa eazo oru schoola pullahalukku ennaththa padichchi kudukkurandu 
            theriyaama eazaachchi olaththi kondu 😆 but eppidiyo it ya maai vettiya ille.
            All the best our new teacher/madam nalla samooha seava seigga!!! 
            finally All the best for your new journey😊`;
            break;
        case 'project':
            message = `This is mOha speaking, i think neeum
             veala theadittuthaan iruppai all the best dear!`;
            break;
        case 'accounts':
            message = `This is mOha speaking, ahh neegganda vaalveega nalla because 
            innam 2 years ekkke ati mudiya but irundhaalum சனி, ஞாயிறு nalla padi aana 
            வார நாட்கள் neeyum vetti😆 thaan it a poala`;
            break;
        default:
            message = `Hello ${name}!`;
    }
    
    messageElement.textContent = message;
    heading.innerText = `Hey ${name},`;
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('userForm').classList.add('hidden');
});
