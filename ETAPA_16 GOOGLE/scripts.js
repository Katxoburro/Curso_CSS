/* 
    Index - onclick
    --> 
    javascript - function
    --> 
    index - appsBox
*/

/* VARIABLES
FUNCIONES
CONDICIONES
BUCLES FOR */

function toggleAppsBox(type) {
    console.log('el type es:', type);

    if (type === 'open') {
        document.getElementById('appsBox').style.display = 'flow-root';
        document.getElementById('appsBoxHidden').style.display = 'block';
    } else if (type === 'close') {
        document.getElementById('appsBox').style.display = 'none';
        document.getElementById('appsBoxHidden').style.display = 'none';
    } else {
        alert('función toggleAppsBox() no disponible');
    }
}

function toggleSettings(type) {
    if (type === 'open') {
        document.getElementById('settings').style.display = 'flow-root';
        document.getElementById('settingsBoxHidden').style.display = 'block';
    } else if (type === 'close') {
        document.getElementById('settings').style.display = 'none';
        document.getElementById('settingsBoxHidden').style.display = 'none';
    } 
}
